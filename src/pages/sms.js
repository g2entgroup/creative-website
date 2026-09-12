import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {Container, Form, Button} from 'react-bootstrap';

const PRIVACY_POLICY_PATH = '/community/legal/privacy-policy';
const TERMS_PATH = '/community/legal/terms-conditions';
const OPT_IN_URL = 'https://creativeplatform.xyz/sms';

const SAMPLE_MESSAGES = [
  'Hey, this is Creative Platform. Just confirming your opt-in to text alerts about features, drops, and community updates. Reply STOP to end.',
  'Hi [first name], thanks for signing up for Creative Platform SMS alerts. If you have questions, reply here. Reply STOP to end.',
];

export default function SmsOptIn() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneFilled = phone.trim().length > 0;
  const canSubmit = consentChecked && phoneFilled;

  function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }
    setSubmitted(true);
  }

  return (
    <Layout
      title="SMS alerts | Creative Platform"
      description="Opt in to optional SMS alerts from Creative Platform about features, drops, Brand Pass, and community updates.">
      <div className="sms-page">
        <Container>
          <div className="sms-page__content">
            <header className="sms-page__header">
              <h1 className="sms-page__headline">Text alerts from Creative Platform</h1>
              <p className="sms-page__subheadline">
                Get optional SMS about features, drops, Brand Pass, and community updates. Email
                still works without texts.
              </p>
              <p className="sms-page__opt-in-description">
                End users opt-in by visiting{' '}
                <Link to="/sms">{OPT_IN_URL}</Link> and adding their phone number. They check a box
                agreeing to receive text messages from Creative Platform, Inc.
              </p>
            </header>

            {submitted ? (
              <div
                className="sms-page__section sms-page__success"
                role="status"
                aria-live="polite">
                <h2 className="sms-page__success-title">You&apos;re opted in</h2>
                <p className="sms-page__success-text">
                  Thanks for signing up for Creative Platform text alerts. This page is for
                  registration evidence only — no message has been sent yet.
                </p>
              </div>
            ) : (
              <div className="sms-page__section">
                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="sms-page__field" controlId="sms-name">
                    <Form.Label htmlFor="sms-name-input">Name (optional)</Form.Label>
                    <Form.Control
                      id="sms-name-input"
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                    />
                  </Form.Group>

                  <Form.Group className="sms-page__field" controlId="sms-phone">
                    <Form.Label htmlFor="sms-phone-input">
                      Mobile phone <span className="sms-page__required">(required for SMS)</span>
                    </Form.Label>
                    <Form.Control
                      id="sms-phone-input"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="(555) 555-5555"
                      aria-required="true"
                    />
                  </Form.Group>

                  <Form.Group className="sms-page__field" controlId="sms-email">
                    <Form.Label htmlFor="sms-email-input">Email (optional)</Form.Label>
                    <Form.Control
                      id="sms-email-input"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                    />
                  </Form.Group>

                  <div className="sms-page__consent">
                    <input
                      id="sms-consent-checkbox"
                      className="sms-page__checkbox"
                      type="checkbox"
                      name="smsConsent"
                      checked={consentChecked}
                      onChange={(event) => setConsentChecked(event.target.checked)}
                      aria-required="true"
                    />
                    <label className="sms-page__consent-label" htmlFor="sms-consent-checkbox">
                      I agree to receive recurring automated text messages from Creative Platform,
                      Inc. at the phone number provided. Msg & data rates may apply. Msg frequency
                      varies. Reply HELP for help and STOP to end. View our{' '}
                      <Link to={TERMS_PATH}>Terms of Service</Link> and{' '}
                      <Link to={PRIVACY_POLICY_PATH}>Privacy Policy</Link>.
                    </label>
                  </div>

                  <p className="sms-page__legal-links">
                    <Link to={PRIVACY_POLICY_PATH}>Privacy Policy</Link>
                    <span aria-hidden="true"> · </span>
                    <Link to={TERMS_PATH}>Terms of Service</Link>
                  </p>

                  <Button
                    type="submit"
                    className="sms-page__submit"
                    disabled={!canSubmit}
                    aria-disabled={!canSubmit}>
                    Opt in to texts
                  </Button>
                </Form>
              </div>
            )}

            <div className="sms-page__section sms-page__samples">
              <h2 className="sms-page__samples-title">Sample text messages</h2>
              <ul className="sms-page__samples-list">
                {SAMPLE_MESSAGES.map((message) => (
                  <li key={message} className="sms-page__sample">
                    {message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
