import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container'

const CallToAction = () => {
    return (

        <section className="cta-one">
            <Container>
                <div className="cta-one__circle-1"></div>
                <div className="cta-one__circle-2"></div>
                <div className="cta-one__circle-3"></div>
                <div className="cta-one__content text-center">
                    <h3>Try Creative Today &amp; <br/> Experience Endless Possibilities</h3>
                    <p>Join innovative brands using Creative to boost growth and engagement.</p>
                    <a href="https://app.unlock-protocol.com/checkout?id=cac7160c-260b-467b-9012-0864039df0e3" target="_blank" rel="noopener noreferrer" className="thm-btn cta-one__btn">Supercharge Your Business</a>
                </div>
            </Container>
        </section>
    )
}
export default CallToAction;