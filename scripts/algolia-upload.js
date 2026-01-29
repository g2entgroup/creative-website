#!/usr/bin/env node
/**
 * Algolia Upload Script
 *
 * Uploads algolia-records.json to Algolia using API keys from .env
 * Requires ADMIN_API_KEY (write permission) - SEARCH_API_KEY is read-only.
 *
 * Usage: yarn algolia:upload
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const RECORDS_FILE = path.join(__dirname, '..', 'algolia-records.json');
const BATCH_SIZE = 1000;

async function uploadToAlgolia() {
  const applicationId = process.env.APPLICATION_ID;
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!applicationId) {
    console.error('❌ Missing APPLICATION_ID in .env');
    process.exit(1);
  }

  if (!adminApiKey) {
    console.error('❌ Missing ADMIN_API_KEY in .env');
    console.error('\nThe SEARCH_API_KEY is read-only. For uploads you need the Admin API key:');
    console.error('1. Go to https://dashboard.algolia.com');
    console.error('2. Select your app → Settings → API Keys');
    console.error('3. Copy the Admin API Key and add to .env:');
    console.error('   ADMIN_API_KEY=your_admin_key_here');
    process.exit(1);
  }

  if (!fs.existsSync(RECORDS_FILE)) {
    console.error('❌ algolia-records.json not found. Run yarn algolia:export first.');
    process.exit(1);
  }

  const records = JSON.parse(fs.readFileSync(RECORDS_FILE, 'utf-8'));
  const indexName = process.env.ALGOLIA_INDEX_NAME || 'creative';

  const { algoliasearch } = await import('algoliasearch');
  const client = algoliasearch(applicationId, adminApiKey);
  const index = client.initIndex(indexName);

  console.log(`Uploading ${records.length} records to index "${indexName}"...`);

  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const chunk = records.slice(i, i + BATCH_SIZE);
    await index.saveObjects(chunk);
    console.log(`  ✓ Batch ${Math.floor(i / BATCH_SIZE) + 1} (${chunk.length} records)`);
  }

  console.log(`\n✅ Successfully uploaded ${records.length} records to Algolia.`);
}

uploadToAlgolia().catch((err) => {
  console.error('❌ Upload failed:', err.message);
  process.exit(1);
});
