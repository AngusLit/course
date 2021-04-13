import { Component } from 'react';
import "../Slides/Slides.css"

export default class Heading extends Component {
    render( ) {
        return (
            <this.props.component>
                { this.props.text }
            </this.props.component>
        );
    }
}