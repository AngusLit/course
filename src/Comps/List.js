import { Component } from 'react';
import "../Slides/Slides.css"

export default class Heading extends Component {
    render( ) {
        return (
            <ul>
                { this.props.text.map( ( val, i ) => {
                    return <li key={ i }>{ val }</li>
                } ) }
            </ul>
        );
    }
}