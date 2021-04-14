import { Component } from 'react';
import "../Slides/Slides.css"

export default class Heading extends Component {
    render( ) {
        return (
            <ol>
                { this.props.text.map( ( val, i ) => {
                    console.log(typeof( val))
                    if ( typeof( val ) === "object") {
                        return (
                            <ol type="a">
                                {
                                    val.map( ( x ) => {
                                        return <li>{ x }</li>
                                    } )
                                }
                            </ol>
                        )
                    } else {
                        return <li key={ i }>{ val }</li>
                    }
                } ) }
            </ol>
        );
    }
}