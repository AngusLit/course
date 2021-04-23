import './App.css';
import { Component } from "react";
import TOC from '../TOC';

export default class App extends Component {
    constructor( ) {
        super();
        this.updateIndex = this.updateIndex.bind(this);
    }

    state = {
        index: 0,
        stack: [ 0 ],
        visited: [ 0 ],
        contents: [
            {
                title: `History and use-cases`,
                time: 15,
                description: `Greyhound divisively hello coldly wonderfully marginally far upon excluding.`,
                start: 1,
                end: 3,
            },
            {
                title: `Installing R`,
                time: 15,
                description: `Greyhound divisively hello coldly wonderfully marginally far upon excluding.`,
                start: 4,
                end: 6,
            },
            {
                title: `Setting up RStudio`,
                time: 15,
                description: `Greyhound divisively hello coldly wonderfully marginally far upon excluding.`,
                start: 7,
                end: 9,
            },
            {
                title: `Working with R packages`,
                time: 15,
                description: `Greyhound divisively hello coldly wonderfully marginally far upon excluding.`,
                start: 10,
                end: 12,
            },
            {
                title: `Getting the most with RMarkdown`,
                time: 15,
                description: `Greyhound divisively hello coldly wonderfully marginally far upon excluding.`,
                start: 13,
                end: 15,
            },
        ]
    };

    updateIndex( val ) {
        const mostRecentSlide = this.state.stack[ this.state.stack.length - 1 ]

        this.setState( { 
            index: this.state.index + val,
        }, ( ) => {
            this.setState( {
                stack: [
                    ...this.state.stack,
                    this.state.index,
                ],
            }, )
            if ( !this.state.visited.includes( mostRecentSlide ) ) {
                this.setState( {
                    visited: [
                        ...this.state.visited,
                        mostRecentSlide,
                    ],
                } )
            }
        } )
    };

    render( ) {
        return(
            <div className = "App" >
                <TOC
                    visited={ this.state.visited }
                    index={ this.state.index }
                    setMaster={ this.updateIndex }
                    contents={ this.state.contents }
                />
            </div>
        )
    };
};