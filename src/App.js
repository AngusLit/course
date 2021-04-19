import { Component } from 'react';
import './App.css';

import Slides from "./Slides/"

export default class App extends Component {
    constructor( ) {
        super( );
        this.setMax = this.setMax.bind( this );
        this.setIndex = this.setIndex.bind( this );
    }

    state = {
        index: 0,
        min: 0,
        max: 0
    }

    setIndex ( val ) {
        this.setState( { index: val } )
    }

    setMax ( val ) {
        this.setState( { max: val } )
    }

    render() {
        window.sessionStorage.setItem( `index`, this.state.index )

        return (
            <div className="App">
                <section className="app-top-nav">
                    <button className="app-nav__home-button"
                        onClick={
                            ( ) => {
                                    this.setState({
                                        index: 0
                                    })
                                }
                            }
                    >
                        <svg
                            className="home-button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
				    </button>
                </section>
                <Slides
                    setIndex={ this.setIndex }
                    setMax={ this.setMax }
                    index={ this.state.index }
                />
                
                <section className="app-bottom-nav">
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
				    </button>
                </section>
            </div>
        );
    }
}