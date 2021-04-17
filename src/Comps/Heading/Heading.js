import { Component } from 'react';
import "./Heading.css"

export default class Heading extends Component {
    state = {
        animate: false,
    }

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
            <this.props.component className={ this.state.animate ? `${this.props.type} fade_in` : this.props.type } >
                { this.props.text }
            </this.props.component>
        );
    }
}