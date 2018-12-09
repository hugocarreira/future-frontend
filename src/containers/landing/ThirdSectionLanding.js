import React, { Component } from 'react'

class ThirdSectionLanding extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    render() {
        return (            
            <section className="hero is-white is-medium has-text-centered has-carousel">
                <div className="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true">
                    <div className="carousel-container">
                    <div className="carousel-item has-background is-active">
                        <img className="is-background image-bg-blur" src={'./images/bg/01.jpg'} alt="" />
                    </div>
                    <div className="carousel-item has-background">
                        <img className="is-background image-bg-blur" src={'./images/bg/02.jpg'} alt="" />
                    </div>
                    <div className="carousel-item has-background">
                        <img className="is-background image-bg-blur" src={'./images/bg/03.jpg'} alt="" />
                    </div>
                    <div className="carousel-item has-background">
                        <img className="is-background image-bg-blur" src={'./images/bg/04.jpg'} alt="" />
                    </div>
                    </div>
                </div>
                <div className="hero-body has-text-centered">
                    <div className="columns is-mobile is-centered">
                    <div className="column is-half is-narrow">
                        <div className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input" type="text" placeholder="Procure um profisional, uma empresa ou até mesmo uma vaga..." />
                        </div>
                        <div className="control">
                            <a className="button is-primary" href="/#">
                            BUSCAR
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ThirdSectionLanding