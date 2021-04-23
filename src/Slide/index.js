import React, { Component } from "react";
import "./Slide.css"

export default class Slide extends Component {
    render( ) {
        return (
            <section className="slide">
                { this.props.children }
            </section>
        )
    }
}