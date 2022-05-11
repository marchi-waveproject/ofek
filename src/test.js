import React, { Component } from 'react'

export default class test extends Component {
    render() {

        console.log(this.props);

        return (
            <div>
                <hr/>
                <p>id: {this.props.data.match.params.id}</p>
                <p>path: {this.props.data.location.pathname}</p>
                <p>search: {this.props.data.location.search}</p>
                <p>hash: {this.props.data.location.hash}</p>
            </div>
        )
    }
}
