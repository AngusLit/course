import { Component } from 'react';
import './App.css';

import Slides from "./Slides/"

export default class App extends Component {
    state = {
        index: 0,
        min: 0,
        max: 5  
    }

    render() {
        return (
            <div className="App">
                <Slides index={this.state.index} />
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
                    <button
                        className="app-nav__button"
                        onClick={
                            ( ) => {
                                if ( this.state.index < this.state.max ) {
                                    this.setState({
                                        index: this.state.index + 1
                                    })
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