import { Component } from 'react';
import "./Heading.css"

export default class Heading extends Component {
    render( ) {
        return (
            <this.props.component>
                { this.props.text }
            </this.props.component>
        );
    }
}