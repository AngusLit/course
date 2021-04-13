import { Component } from 'react';
import "../Slides/Slides.css"

export default class Quote extends Component {
    render( ) {
        return (
            <div className="quote">
                <img
                    className="quote__headshot"
                    alt={ this.props.textAlternative }
                    src={ this.props.source }
                />
                <p className="quote__text">
                    { this.props.quote }
                </p>
                <p className="quote__cite">
                    { this.props.citation }
                </p>
            </div>
        );
    }
}