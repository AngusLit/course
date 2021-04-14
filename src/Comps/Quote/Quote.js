import { Component } from 'react';
import "./Quote.css"

export default class Quote extends Component {
    render( ) {
        return (
            <div className="quote">
                <img
                    className="quote__headshot"
                    alt={ this.props.textAlternative }
                    src={ this.props.source }
                />
                <q className="quote__text">
                    { this.props.quote }
                </q>
                <p className="quote__cite">
                    { this.props.citation }
                </p>
            </div>
        );
    }
}