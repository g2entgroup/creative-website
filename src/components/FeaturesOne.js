import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faStore } from '@fortawesome/free-solid-svg-icons';

const cashRegister = <FontAwesomeIcon icon={faCashRegister} />
const store = <FontAwesomeIcon icon={faStore} />

const FeaturesOne = () => {
    return (
        <div className="cta-three">
            <img src="img/shapes/cta-1-shape-2.png" alt="" className="cta-three__shape-2" />
            <img src="img/shapes/cta-1-shape-3.png" alt="" className="cta-three__shape-3" />
            <Container>
                <img src="img/shapes/cta-1-shape-1.png" alt="" className="cta-three__shape-1" />
                
                <div className="row justify-content-end">
                    <Col lg={6}>
                        <div className="cta-three__content">
                            <div className="block-title text-left">
                                <span className="block-title__bubbles"></span>
                                <p>Creative Platform Apps</p>
                                <h3>One platform. Multiple apps.</h3>
                            </div>
                        <img src="img/mocs/marketplaces.png" alt="" className="cta-three__moc" />
                            <div className="cta-three__box-wrap">
                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i>{store}</i>
                                    </div>
                                    <div className="cta-three__box-content">
                                        <h3>Designed to Help You Grow</h3>
                                        <p>Build your audience and expand your reach on your own terms.</p>
                                    </div>
                                </div>
                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i>{cashRegister}</i>
                                    </div>
                                    <div className="cta-three__box-content">
                                        <h3>Built for Creator Earnings</h3>
                                        <p> Monentize content and engagement directly, without platfrom lock-in.</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#featuresTwo" data-target="#featuresTwo" className="thm-btn cta-three__btn scroll-to-target">Discover More</a>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    )
}
export default FeaturesOne;
