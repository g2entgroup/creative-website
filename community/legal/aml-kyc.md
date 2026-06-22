---
id: aml-kyc
title: AML & KYC Policy
sidebar_position: 5
---

# Anti-Money Laundering (AML) & Know Your Customer (KYC) Policy

**Policy Title:** Third-Party Reliance Compliance Policy  
**Effective Date:** June 22, 2026  
**Entity:** Creative Platform, Inc.  
**Document Version:** 1.0

## 1. Purpose and Scope

The purpose of this document is to establish the Anti-Money Laundering (AML), Know Your Customer (KYC), and Sanctions screening framework for Creative Platform, Inc. ("the Company"). This policy outlines our operational model, our regulatory classification, and our reliance on regulated third-party infrastructure providers to mitigate the risks of financial crime, fraud, and illicit activities on our software interfaces.

## 2. Business Model and Regulatory Status

Creative Platform, Inc. operates strictly as a technology and software development company. The Company builds and maintains user interfaces that allow creators and users to interact with decentralized, automated smart contracts on the Base network.

**Non-Custodial Declaration:** At no point does Creative Platform, Inc. hold, control, custody, or transmit user funds, fiat currency, or digital assets. Because the Company's software is entirely non-custodial and does not engage in the business of money transmission, Creative Platform, Inc. is not classified as a Money Services Business (MSB) or a Virtual Asset Service Provider (VASP) under FinCEN regulations.

## 3. Third-Party Reliance Architecture

To ensure strict compliance with international AML/KYC standards while maintaining our non-custodial software model, Creative Platform, Inc. utilizes a "Third-Party Reliance" strategy. All processes related to wallet creation, authentication, and fiat-to-crypto money transmission are outsourced to globally regulated and compliant third-party infrastructure providers.

### 3.1. Wallet Infrastructure and User Authentication

User authentication, wallet creation, and secure key management are exclusively handled by our infrastructure partners:

- **Crossmint:** Manages embedded wallet creation and security for specific ecosystem integrations.
- **Alchemy:** Facilitates secure decentralized application login and infrastructure.

Creative Platform, Inc. does not store user passwords, private keys, or maintain backend access to user wallets.

### 3.2. Fiat-to-Crypto On-Ramping (Money Transmission)

Creative Platform, Inc. does not process fiat payments or execute crypto-to-fiat conversions. Any user initiating a conversion between fiat currency and digital assets via our interfaces is securely routed through our integrated on-ramp partners. These partners are registered MSBs and enforce stringent regulatory compliance:

- **Coinbase Onramp:** Utilized for primary fiat-to-crypto conversions.
- **Halliday:** Utilized for specific asset checkouts (including IP and GHO tokens).

## 4. Customer Identification Program (CIP) & Customer Due Diligence (CDD)

Because Creative Platform, Inc. does not transmit money, we rely entirely on our regulated on-ramp partners (Coinbase and Halliday) to execute the Customer Identification Program (CIP) and Customer Due Diligence (CDD). Prior to any fiat transaction being authorized, these partners natively enforce:

- Collection of Government-Issued Identifications.
- Liveness checks and biometric verification.
- Risk profiling and enhanced due diligence (EDD) for higher-risk jurisdictions or transaction volumes.

## 5. Sanctions Screening (OFAC) and Transaction Monitoring

Our third-party providers cross-reference all users and wallets against major international sanctions lists, including the U.S. Treasury's Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) list. Furthermore, partners like Crossmint and Coinbase employ advanced blockchain analytics and transaction monitoring to flag, block, and report suspicious activities.

## 6. Data Security and Privacy

Creative Platform, Inc. adheres to the principle of data minimization. Sensitive Personally Identifiable Information (PII) required for KYC (such as passports, SSNs, or bank account details) is processed and stored securely by our regulated third-party partners. Creative Platform, Inc. does not store this sensitive financial data on its local servers.

---

This policy is approved by the executive management of Creative Platform, Inc. and is subject to annual review or updates upon integration of new infrastructure partners.

*Creative Platform, Inc. | Confidential & Proprietary*
