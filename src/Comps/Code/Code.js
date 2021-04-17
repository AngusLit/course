import { Component } from 'react';
import "./Code.css"

export default class Code extends Component {
    componentDidMount() {
        let counter = window.sessionStorage.getItem( "index" );
        if ( window.sessionStorage.getItem("firstLoadDone" + Number( counter ) ) === null ) {
            this.setState({
                animate: true,
            } )
            window.sessionStorage.setItem( "firstLoadDone" + Number( counter ), 1 )
        } else {
            this.setState( {
                animate: false,
            } )
        }
    }

    render( ) {
        return (
            <div className={ this.props.type }>
                { this.props.text.map( ( val, i ) => {
                    return (
                        <div key={ i }  className={ this.state.animate ? `code__line fade_in` : `code__line` } >
                            <p className="line__number">{ i + 1 }</p>
                            <p className="line__expression">{ val }</p>
                        </div>
                    )
                } ) }
            </div>
        );
    }
}