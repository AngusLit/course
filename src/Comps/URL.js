import { Component } from 'react';
import "../Slides/Slides.css"

export default class URL extends Component {
    render( ) {
        return (
            <p className="url">
                <svg xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 20 20"
                    height="48px"
                    viewBox="0 0 20 20"
                    width="48px"
                    fill="#000000">
                        <rect fill="none" height="20" width="20"/>
                        <path d="M17.85,8.5h-1.54c-0.48-2.03-1.93-3.68-3.82-4.48V4.5C12.5,5.33,11.83,6,11,6H9v1c0,0.55-0.45,1-1,1H7v2h1v2H7L3.64,8.64 C3.55,9.08,3.5,9.53,3.5,10c0,3.58,2.92,6.5,6.5,6.5V18c-4.42,0-8-3.58-8-8s3.58-8,8-8C13.91,2,17.15,4.8,17.85,8.5z M18,16.44 l-1.06,1.06l-2.56-2.56c-0.54,0.35-1.19,0.56-1.88,0.56C10.57,15.5,9,13.93,9,12s1.57-3.5,3.5-3.5S16,10.07,16,12 c0,0.69-0.21,1.34-0.56,1.88L18,16.44z M14.5,12c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14.5,13.1,14.5,12z"/>
                </svg>
                { this.props.name }:&nbsp;
                <a href={ this.props.hyperlink } rel="noreferrer" target="_blank">
                     launch
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                </a>
            </p>
        );
    }
}