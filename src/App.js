import { Component } from 'react';
import './App.css';

import Slides from "./Slides/"

export default class App extends Component {
    constructor( ) {
        super( );
        this.setMax = this.setMax.bind( this );
    }

    state = {
        index: 0,
        min: 0,
        max: 0
    }

    setMax ( val ) {
        this.setState( { max: val } )
    }

    render() {
        return (
            <div className="App">
                <Slides setMax={ this.setMax } index={ this.state.index } />
                <section className="app-nav">
                    <button
                        className="app-nav__button"
                        onClick={
                            ( ) => {
                                if ( this.state.index > this.state.min ) {
                                    this.setState({
                                        index: this.state.index - 1
                                    })
                                }
                            }
                        }
                    >
                        BACK
				    </button>
                    <progress
                        className="app-nav__progress"
                        value={this.state.index}
                        max={this.state.max}
                    />
                    <button
                        className="app-nav__button"
                        onClick={
                            ( ) => {
                                if ( this.state.index < this.state.max ) {
                                    this.setState( {
                                        index: this.state.index + 1
                                    } )
                                }
                            }
                        }
                    >
                        NEXT
				    </button>
                </section>
            </div>
        );
    }
}