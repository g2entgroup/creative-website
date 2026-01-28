import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CreatorsModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="creators-modal"
      aria-labelledby="creators-modal-title"
    >
      <Modal.Header className="creators-modal__header">
        <Modal.Title id="creators-modal-title" className="creators-modal__title">
          Own Your Craft, Own Your IP
        </Modal.Title>
        <button
          type="button"
          className="creators-modal__close"
          onClick={onHide}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </Modal.Header>
      <Modal.Body className="creators-modal__body">
        <div className="creators-modal__content">
          <h2 className="creators-modal__headline">
            Stop Being a Product. Start Being a Platform.
          </h2>
          <p className="creators-modal__subheadline">
            At Creative TV, you keep 100% of your revenue and total control over your intellectual property. From your first upload to your first prediction market, we provide the onchain tools to turn your art into an ecosystem.
          </p>

          <div className="creators-modal__section">
            <h3 className="creators-modal__section-title">What You Can Do (Free Account)</h3>
            <ul className="creators-modal__features-list">
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Decentralized Hosting:</strong> Upload music videos, podcasts, and original films/animations without fear of de-platforming.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Onchain IP Management:</strong> Register your work via Story Protocol to secure your rights globally and instantly.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Collaborative Splits:</strong> Automatically distribute earnings to your team with smart contract revenue splits.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Launch Your metoken:</strong> Create a tradeable social token to build a liquid economy around your brand.
                </span>
              </li>
            </ul>
          </div>

          <div className="creators-modal__section creators-modal__section--upgrade">
            <h3 className="creators-modal__section-title">
              Upgrade to the Creator Membership ($30/Quarter)
            </h3>
            <ul className="creators-modal__features-list">
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Go Live:</strong> Unlock high-performance livestreaming powered by Livepeer.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>The AI Agent Factory:</strong> Access our AI agents that help make running your Creative business easier while you focus on what you do best as a creator.
                </span>
              </li>
              <li className="creators-modal__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="creators-modal__check-icon" />
                <span>
                  <strong>Prediction Markets:</strong> Let your fans bet on your success. Create markets for viewers to predict your future milestones, creating a new layer of engagement and utility.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatorsModal;
