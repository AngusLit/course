import { Component } from 'react';
import "../Slides/Slides.css"

export default class Heading extends Component {
    render( ) {
        return (
            <p className={ this.props.type }>
                { this.props.text }
            </p>
        );
    }
}