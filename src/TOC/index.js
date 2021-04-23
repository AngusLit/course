import React, { Component } from "react";
import Slide from "../Slide";
import NavMenu from "../Nav";
import Tile from "./Tile"
import "./TOC.css";

export default class TOC extends Component {
    createNavMenu( min, max) {
        return (
            <NavMenu
                prev={ ( ) => ( this.props.index > min ) ? this.props.setMaster( -1 ) : void( 0 ) }
                next={ ( ) => ( this.props.index < max ) ? this.props.setMaster( 1 ) : this.props.setMaster( max * -1 ) }
            />
        )
    }

    createToc( ) {
        var x = this.props.contents.map( (val, i) => {
            return (
                <Tile
                    key={ i }
                    number={ i + 1}
                    title={ val.title }
                    time={ val.time }
                    description={ val.description }
                    visited={ val.visisted }
                    start={ ( ) => this.props.setMaster( val.start ) }
                    className={ ( this.props.visited.includes( val.start - 1  ) ) ? `toc__launch unlocked` : `toc__launch locked` }
                />
            );
        } );
        return x;
    };

    render( ) {
        var homeButton = 
            <button className={ `home-button` }
                onClick={ ( ) => this.props.setMaster( this.props.index * -1 ) }
            >
                <svg className="home-button__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
            </button>

        this.state = {
            render: [ 
                <Slide>
                    <ol>
                        { this.createToc() }
                    </ol>
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_1</p>
                    { this.createNavMenu(1, 3) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_2</p>
                    { this.createNavMenu(1, 3) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_3</p>
                    { this.createNavMenu(1, 3) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_4</p>
                    { this.createNavMenu(4, 6) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_5</p>
                    { this.createNavMenu(4, 6) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_6</p>
                    { this.createNavMenu(4, 6) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_7</p>
                    { this.createNavMenu(7, 9) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_8</p>
                    { this.createNavMenu(7, 9) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_9</p>
                    { this.createNavMenu(7, 9) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_10</p>
                    { this.createNavMenu(10, 12) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_11</p>
                    { this.createNavMenu(10, 12) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_12</p>
                    { this.createNavMenu(10, 12) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_13</p>
                    { this.createNavMenu(13, 15) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_14</p>
                    { this.createNavMenu(13, 15) }
                </Slide>,
                <Slide>
                    { homeButton }
                    <p>slide_15</p>
                    { this.createNavMenu(13, 15) }
                </Slide>,
            ],
        };

        return (
            this.state.render[ this.props.index ]
        );
    };
};