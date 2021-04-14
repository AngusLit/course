import { Component } from 'react';
import "./Code.css"

export default class Code extends Component {
    render( ) {
        return (
            <div className={ this.props.type }>
                { this.props.lines.map( ( val, i ) => {
                    return (
                        <div key={ i } className="code__line">
                            <p>{ i }</p>
                            <p>{ val }</p>
                        </div>
                    )
                } ) }
            </div>
        );
    }
}