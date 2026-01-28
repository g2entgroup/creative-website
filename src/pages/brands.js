import React from 'react';
import Layout from '@theme/Layout';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Brands() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout 
      title="Brands - Authentic Connection at Scale" 
      description="Move past 'ads' and into 'alliances.' Partner with the world's most innovative onchain creators in a transparent, decentralized environment."
    >
      <div className="brands-page">
        <Container>
          <div className="brands-page__content">
            <div className="brands-page__header">
              <span className="brands-page__tagline">Authentic Connection at Scale</span>
              <h1 className="brands-page__headline">
                Advertise Differently. Collaborate Deeply.
              </h1>
              <p className="brands-page__subheadline">
                Move past "ads" and into "alliances." Partner with the world's most innovative onchain creators in a transparent, decentralized environment.
              </p>
            </div>

            <div className="brands-page__section">
              <h2 className="brands-page__section-title">The Brand Experience</h2>
              <ul className="brands-page__features-list">
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Onchain Transparency:</strong> Every dollar spent and every impression earned is verifiable on the blockchain.
                  </span>
                </li>
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Direct Access:</strong> No middlemen. Work directly with creators through automated smart contracts.
                  </span>
                </li>
              </ul>
            </div>

            <div className="brands-page__section brands-page__section--upgrade">
              <h2 className="brands-page__section-title">
                Brand Membership ($1,000/Month)
              </h2>
              <ul className="brands-page__features-list">
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Custom Collaboration Campaigns:</strong> Work with our DAO to match your brand with the perfect creatives for high-impact, authentic content.
                  </span>
                </li>
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Native Advertising:</strong> Gain premium placement and advertising opportunities across the Creative TV ecosystem.
                  </span>
                </li>
                <li className="brands-page__feature-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="brands-page__check-icon" />
                  <span>
                    <strong>Verified Partnership:</strong> A "Certified Brand" status that builds trust within our savvy, Web3-native community.
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
