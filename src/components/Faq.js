import React from 'react';
import { Container } from 'react-bootstrap';

const Faq = () => {
        return (

            <section className="faq-one">
                <img src="img/shapes/faq-shape-1.png" alt="" className="faq-one__shape-1"/>
                <img src="img/shapes/faq-shape-2.png" alt="" className="faq-one__shape-2"/>
                <img src="img/shapes/faq-shape-3.png" alt="" className="faq-one__shape-3"/>
                <Container>
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <p>Frequently Asked Questions</p>
                        <h3>Common Questions From Creatives</h3>
                    </div>
                    <div className="accrodion-grp wow fadeIn faq-accrodion animated">
                        <div className="accrodion">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Do I need crypto or Web3 experience to use Creative?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>No. Creative is designed so you can start creating and earning without needing to understand blockchain technology. Everything works behind the scenes.</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion  ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Who is Creative for?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Creative is built for independent creators — musicians, artists, writers, filmmakers, and anyone building an audience around their work.</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>How do creators make money on Creative?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Creators earn through their content, community engagement, and platform rewards — all while keeping control of their work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Do I own my content?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Yes. You always retain ownership and control over what you create and share.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
}
export default Faq;