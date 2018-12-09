import React, { Component } from 'react'

class PageLoaderLanding extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="pageloader has-background-grey-lighter is-active" id="pageloader"></div>
        )
    }
}

export default PageLoaderLanding