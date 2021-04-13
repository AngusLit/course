import { Component } from 'react';
import Slide001 from './slide_001.js';
import Slide002 from './slide_002.js';
import Slide003 from './slide_003.js';
import Slide004 from './slide_004.js';
import Slide005 from './slide_005.js';
import Slide006 from './slide_006.js';
import "./Slides.css"

export default class App extends Component {
    state={
        contents: [
            <Slide001 />,
            <Slide002 />,
            <Slide003 />,
            <Slide004 />,
            <Slide005 />,
            <Slide006 />
        ]
    }

    render( ) {
        return (
            this.state.contents[ this.props.index ]
        );
    }
}