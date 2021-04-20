import { Component } from 'react';
import "./MCQ.css"

export default class MCQ extends Component {
    constructor( ) {
        super( );
        this.handleFeedback = this.handleFeedback.bind( this )
    }

    state = {
        index: 0,
        classList: [
            "mcq__feedback--hidden",
            "mcq__feedback--visible"
        ],
        feedbackIcon: null
    }

    handleFeedback( ) {
        var x = document.getElementsByClassName( "mcq__input" )
        for ( let i = 0; i < x.length; i++ ) {
            if ( x[ i ].checked === true) {
                this.setState( { index: this.state.index + 1 } )
                if ( i === this.props.correct ) {
                    this.setState( {
                        feedbackIcon: 
                            <svg
                                className="mcq__feedback__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="36px"
                                viewBox="0 0 24 24"
                                width="36px"
                                fill="#A6CA72"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                            </svg>
                    })
                } else {
                    this.setState( {
                        feedbackIcon: 
                            <svg 
                                className="mcq__feedback__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="36px"
                                viewBox="0 0 24 24"
                                width="36px"
                                fill="#DD5E56"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
                            </svg>
                    })
                }
            }
        }
        
    }

    render( ) {
        if ( window.sessionStorage.getItem( `mcq_${ this.props.index }` ) !== null) {
            var x = window.sessionStorage.getItem( `mcq_${ this.props.index }` )
        }

        return (
            <div className="mcq">
                <p className="mcq__question">
                    { this.props.question }
                </p>

                <form className="mcq__form">
                    { this.props.options.map( ( val, i ) => {
                        let y = i;
                        return (
                            <div
                                key={i}
                                className="mcq__option"
                                onClick={ () => window.sessionStorage.setItem( `mcq_${ this.props.index }`, y ) }
                            >
                                <input
                                    id={ `option_${ i }` }
                                    className="mcq__input"
                                    key={ `input_${ i }` }
                                    defaultChecked={ ( Number( x ) === Number( i ) ) }
                                    name="q"
                                    type="radio"
                                />
                                <label
                                    key={ `label_${ i }` }
                                    htmlFor={ `option_${ i }` }
                                >
                                    { val }
                                </label>
                            </div>
                        )
                    } ) }
                </form>

                <button
                    className="mcq__submit"
                    onClick={ this.handleFeedback }
                >
                    Submit
                </button>

                <section
                    id="mcq__feedback"
                    className={ this.state.classList[ this.state.index ] }
                >
                    { this.state.feedbackIcon } 
                    <p>
                        { this.props.feedback }
                    </p>
                </section>
                
            </div>
        );
    };
};