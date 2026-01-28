import React from 'react';
import Layout from '@theme/Layout';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Creators() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout 
      title="Creators - Own Your Craft, Own Your IP" 
      description="At Creative TV, you keep 100% of your revenue and total control over your intellectual property. From your first upload to your first prediction market, we provide the onchain tools to turn your art into an ecosystem."
    >
      <div className="creators-page">
        <Container>
          <div className="creators-page__content">
            <div className="creators-page__header">
              <span className="creators-page__tagline">Own Your Craft, Own Your IP</span>
              <h1 className="creators-page__headline">
                Stop Being a Product. Start Being a Platform.
              </h1>
              <p className="creators-page__subheadline">
                At Creative TV, you keep 100% of your revenue and total control over your intellectual property. From your first upload to your first prediction market, we provide the onchain tools to turn your art into an ecosystem.
              </p>
            </div>

            <div className="creators-page__section">
              <h2 className="creators-page__section-title">What You Can Do (Free Account)</h2>
              <ul className="creators-page__features-list">
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Decentralized Hosting:</strong> Upload music videos, podcasts, and original films/animations without fear of de-platforming.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Onchain IP Management:</strong> Register your work via Story Protocol to secure your rights globally and instantly.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Collaborative Splits:</strong> Automatically distribute earnings to your team with smart contract revenue splits.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Launch Your metoken:</strong> Create a tradeable social token to build a liquid economy around your brand.
                  </span>
                </li>
              </ul>
            </div>

            <div className="creators-page__section creators-page__section--upgrade">
              <h2 className="creators-page__section-title">
                Upgrade to the Creator Membership ($30/Quarter)
              </h2>
              <ul className="creators-page__features-list">
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Go Live:</strong> Unlock high-performance livestreaming powered by Livepeer.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>The AI Agent Factory:</strong> Access our AI agents that help make running your Creative business easier while you focus on what you do best as a creator.
                  </span>
                </li>
                <li className="creators-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="creators-page__check-icon" />
                  <span>
                    <strong>Prediction Markets:</strong> Let your fans bet on your success. Create markets for viewers to predict your future milestones, creating a new layer of engagement and utility.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
