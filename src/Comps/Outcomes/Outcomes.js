import { Component } from 'react';
import "./Outcomes.css"

export default class Heading extends Component {
    render( ) {
        return (
            <div>
                <p>By the end of this topic, you should be able to:</p>
                <ul>
                    { this.props.text.map( ( val, i ) => {
                        return <li key={ i }>{ val }</li>
                    } ) }
                </ul>
            </div>
        );
    }
}