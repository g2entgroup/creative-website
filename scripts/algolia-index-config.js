#!/usr/bin/env node
/**
 * Configure Algolia index settings for A/B Testing, Analytics, Related Items, Trending Items.
 * Run after uploading records: yarn algolia:upload
 *
 * Requires: APPLICATION_ID and ADMIN_API_KEY in .env
 */

require('dotenv').config();

const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || 'creative';

async function configureIndex() {
  const applicationId = process.env.APPLICATION_ID;
  const adminApiKey = process.env.ADMIN_API_KEY;

  if (!applicationId || !adminApiKey) {
    console.error('❌ Missing APPLICATION_ID or ADMIN_API_KEY in .env');
    process.exit(1);
  }

  const { algoliasearch } = await import('algoliasearch');
  const client = algoliasearch(applicationId, adminApiKey);
  const index = client.initIndex(INDEX_NAME);

  await index.setSettings({
    attributesForFaceting: ['type', 'filterOnly(type)'],
    searchableAttributes: ['lvl0', 'lvl1', 'content', 'url'],
    customRanking: ['desc(type)', 'asc(lvl0)'],
  });

  console.log(`✅ Index "${INDEX_NAME}" configured for:`);
  console.log('   - attributesForFaceting: type');
  console.log('   - searchableAttributes: lvl0, lvl1, content, url');
  console.log('\nNext: Enable Algolia Recommend in Dashboard → Data sources → Recommend');
  console.log('      Train Related Items & Trending Items models (requires 30+ days of events)');
}

configureIndex().catch((err) => {
  console.error('❌ Config failed:', err.message);
  process.exit(1);
});
