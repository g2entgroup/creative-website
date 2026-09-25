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
                        <h3>Common Questions From Creators</h3>
                    </div>
                    <div className="accrodion-grp wow fadeIn faq-accrodion animated">
                        <div className="accrodion">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Q: What is the Creative Platform?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A: Creative Platform is home for musicians, video producers, and digital artists. Get discovered, work with fans and brands, and earn on Creative TV.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion  ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Q: Who is Creative for?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                    <p>A: It is for musicians, video producers, and digital artists who want full ownership of their work. Whether you are an independent artist releasing your first track or a label managing a catalog, our tools scale with you.</p>                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Q: How do creators make money on Creative?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A: You earn when fans stream and support your work. Creative Finance tracks payouts and sends earnings to your bank.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Q: What is a meToken?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A: It is your personal brand currency. Think of it like a stock for your personal brand.

                                        <ul>
                                        <li>For You: You earn it when people engage with your content.</li>

                                        <li>For Fans: They can buy and hold your meToken to support you (patronage) or because they believe your value will grow (speculation).</li>

                                        <li>For Access: You can even require fans to hold your meToken to access exclusive live streams or premium content.</li>
                                        </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Q: How do I turn my tokens into cash?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A: Use Creative Finance in three quick steps. Cash out earnings, convert if needed, then withdraw to your bank from your profile.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Q: Do I keep the rights to my music and art?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A: Yes, 100%. Unlike traditional labels or platforms that might take a percentage of your IP, Creative Platform is built on the belief that you own what you create. We simply provide the tools to help you distribute and monetize it.</p>
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