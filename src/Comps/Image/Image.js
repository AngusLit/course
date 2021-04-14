import { Component } from 'react';
import "./Image.css"

export default class Image extends Component {
    render( ) {
        return (
            <img
                className={ this.props.type }
                alt={ this.props.textAlternative }
                src={ this.props.source }
            />
        );
    }
}