import React, { Component } from 'react'
import * as fontAwesome from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class FirstSectionLanding extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <section className="hero has-background-light has-text-centered is-fullheight-with-navbar">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column">
                    <h1 className="toggleadd is-cursor-pointer">
                      <a className="logo" href="/" style={{ color: '#4a4a4a' }}>
                        <fontAwesome.FontAwesomeIcon icon={faPlus} size="3x" />
                        <span className="is-size-1" style={{ marginLeft: 8, textDecorationLine: 'underline' }}>JOB</span>
                      </a>
                    </h1>
                    <div className="field fieldmsg has-text-centered">
                      <a href="/" className="button is-primary is-large">
                        DESCUBRA
                      </a>
                    </div>
                    <div className="field fieldmsg has-text-centered">
                      <p className="is-opaque25">feito para empresas e profissionais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>                                
        )
    }
}

export default FirstSectionLanding