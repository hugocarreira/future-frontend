import React, { Component } from 'react'
import * as fontAwesome from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    render() {
        return (
            
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" style={{ color: '#4a4a4a' }} href="/">
                        <fontAwesome.FontAwesomeIcon icon={faPlus} size="2x" />
                        <span className="is-size-3" style={{ marginLeft: 5, textDecorationLine: 'underline' }}>JOB</span>
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu" href="/#">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">Sobre</a>
                        <a className="navbar-item" href="/">Para Empresas</a>
                        <a className="navbar-item" href="/">Para você, Profissional</a>
                        <a className="navbar-item" href="/">Por que Future?</a>      
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" href="/signup">
                                <span className="icon is-small">
                                    <fontAwesome.FontAwesomeIcon icon={faUserPlus} />
                                    <i className="fas fa-user-plus"></i>
                                </span>
                                <strong>Cadastro</strong>
                                </a>
                            </p>
                            <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000"
                                href="/login">
                                <span className="icon is-small">
                                    <fontAwesome.FontAwesomeIcon icon={faSignInAlt} />
                                </span>
                                <span>Entrar</span>
                                </a>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar