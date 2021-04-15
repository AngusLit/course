import { Component } from 'react';
import "./List.css"

export default class List extends Component {
    render( ) {
        return (
            <ol>
                { this.props.text.map( ( val, i ) => {
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