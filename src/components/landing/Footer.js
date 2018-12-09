import React, { Component } from 'react'
import * as fontAwesome from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Footer extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    render() {
        return (            
            <footer className="footer">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column is-centered">
                            <h4 className="bd-footer-title">
                                
                            </h4>
                            <div className="bd-footer-iframe">
                                <div className="columns is-centered is-mobile">
                                    <div className="column is-2">
                                        <a href="/#" className="bd-footer-link-title button is-twitter">                                            
                                            <fontAwesome.FontAwesomeIcon icon={faTwitter}/>
                                        </a>
                                    </div>
                                    <div className="column is-2">
                                        <a href="/#" className="bd-footer-link-title button is-facebook">
                                            <fontAwesome.FontAwesomeIcon icon={faFacebook}/>
                                        </a>
                                    </div>
                                    <div className="column is-2">
                                        <a href="/#" className="bd-footer-link-title button is-linkedin">
                                            <fontAwesome.FontAwesomeIcon icon={faLinkedin}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bd-footer-links">
                        <div className="columns">
                            <div className="column is-3">
                                <p className="bd-footer-link-title">
                                    <a href="/#">Future</a>
                                </p>

                                <p className="bd-footer-link">
                                    <a href="/#">Sobre</a>
                                </p>

                                <p className="bd-footer-link">
                                    <a href="/#">Trabalhe Conosco</a>
                                </p>

                                <p className="bd-footer-link">
                                    <a href="/#">Contato</a>
                                </p>

                                <p className="bd-footer-link">
                                    <a href="/#">Termos e Condições</a>
                                </p>
                            </div>

                            <div className="column is-3">
                                <p className="bd-footer-link-title">
                                    <a href="#documentation">Links Úteis</a>
                                </p>
                                <p className="bd-footer-link">
                                    <a href="#documentation/overview">
                                    Ajuda
                                    </a>
                                </p>
                                <p className="bd-footer-link">
                                    <a href="#documentation/overview">
                                    Privacidade
                                    </a>
                                </p>
                                <p className="bd-footer-link">
                                    <a href="#documentation/overview">
                                    Divulgação
                                    </a>
                                </p>
                            </div>

                            <div className="column is-6">
                                <p className="bd-footer-link-title">
                                    <a href="#more">Mais</a>
                                </p>


                                <p className="bd-footer-link bd-has-subtitle">
                                    <a href="#expo">
                                    <span className="bd-footer-link-icon">
                                        <i className="fas fa-book"></i>
                                    </span>
                                    <strong>Vagas</strong>
                                    <em>Navegue por todas a vagas abertas</em>
                                    </a>
                                </p>

                                <p className="bd-footer-link bd-has-subtitle">
                                    <a href="#bulma-start">
                                    <span className="bd-footer-link-icon">
                                        <i className="fas fa-address-book"></i>
                                    </span>
                                    <strong>Profissionais</strong>
                                    <em>Explore os profissionais</em>
                                    </a>
                                </p>

                                <p className="bd-footer-link bd-has-subtitle">
                                    <a href="#love">
                                    <span className="bd-footer-link-icon has-text-danger">
                                        <i className="fas fa-heart"></i>
                                    </span>
                                    <strong>Top Empresas </strong>
                                    <em>As empresas mais desejadas</em>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="content has-text-centered">
                        <p>© 2018 Future</p>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer


