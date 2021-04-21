import React, { Component } from "react";

export default class Slide extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visited: false,
            checkpoint: (typeof( this.props.checkpoint ) !== "undefined") ? true : false,
        }
    }

    componentDidMount() {
        this.setState( {
            visited: true,
        } )
        if ( this.state.checkpoint === true) {
            alert("checkpoint")
        }
        console.log( this.state.checkpoint )
    }

    render( ) {
        return (
            <section className="slide">
                { this.props.children }
            </section>
        )
    }
}