import React, { Component } from 'react'
import * as fontAwesome from '@fortawesome/react-fontawesome'
import { faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons'

class SecondSectionLanding extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <section className="section">
                <div className="is-primary">
                <div className="container has-text-centered">
                    <div className="columns is-centered">
                    <div className="column is-4">
                        <span className="is-huge is-text is-large">
                            <span className="is-huge is-marginless">
                                <fontAwesome.FontAwesomeIcon icon={faUsers} size="3x" />
                            </span>
                        </span>
                        <h3 className="title">Para profissionais</h3>
                        <h4 className="subtitle is-6">Encontre seu emprego ideial, de maneira rápida e fácil.</h4>
                    </div>
                    <div className="column is-4">
                        <span className="is-huge is-text is-large">
                            <span className="is-huge is-marginless">
                                <fontAwesome.FontAwesomeIcon icon={faBuilding} size="3x" />
                            </span>
                        </span>
                        <h3 className="title">Para empresas</h3>
                        <h4 className="subtitle is-6">Vá direto ao candidato que você precisa para sua empresa.</h4>
                    </div>
                    </div>
                </div>
            
                <div className="section">
                    <div className="container has-text-centered">
                    <div className="columns is-centered">
            
                        <div className="column is-3">
                            {/* <span className="is-huge is-text is-large">
                                <span className="is-huge is-marginless">
                                    <fontAwesome.FontAwesomeIcon icon={faAddressCard} size="2x" />
                                </span>
                            </span> */}
                            <h3 className="subtitle">PROFISSIONAIS</h3>
                            <h4 className="title">3.000</h4>
                        </div>
                        <div className="column is-3">
                            {/* <span className="is-huge is-text is-large">
                                <span className="is-huge is-marginless">
                                    <fontAwesome.FontAwesomeIcon icon={faBuilding} size="2x" />
                                </span>
                            </span> */}
                            <h3 className="subtitle">EMPRESAS</h3>
                            <h4 className="title">3.000</h4>
                        </div>
                        <div className="column is-3">
                            {/* <span className="is-huge is-text is-large">
                                 <span className="is-huge is-marginless">
                                    <fontAwesome.FontAwesomeIcon icon={faBuilding} size="2x" />
                                </span>
                            </span> */}
                            <h3 className="subtitle">VAGAS ABERTAS</h3>
                            <h4 className="title">3.000</h4>
                        </div>
                        <div className="column is-4">
                            {/* <span className="is-huge is-text is-large">
                                 <span className="is-huge is-marginless">
                                    <fontAwesome.FontAwesomeIcon icon={faBuilding} size="2x" />
                                </span>
                            </span> */}
                            <h3 className="subtitle">PROFISSIONAIS CONTRATADOS</h3>
                            <h4 className="title">3.000</h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
          </section>                     
        )
    }
}

export default SecondSectionLanding