import { Component } from 'react';
import "./Paragraph.css";

export default class Paragraph extends Component {
    
    render( ) {
        let contents
        if ( typeof( this.props.text )  === "object"  ) {
            contents = this.props.text.map( (val, i ) => {
                        return (
                            <p key={ i }>
                                { val }
                            </p>
                        )
                    } )
        } else {
            contents = <p>{ this.props.text } </p>
        }

        return (
            <section className={ this.props.type }>
                { contents }
            </section>
        )
    }
}