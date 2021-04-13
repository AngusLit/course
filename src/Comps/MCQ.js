import { Component } from 'react';
import "../Slides/Slides.css"

export default class MCQ extends Component {
    render( ) {
        return (
            <p>
                { this.props.text }
            </p>
        );
    }
}