import { Component } from 'react';
import Slide000 from './slide_000.js';
import Slide001 from './slide_001.js';
import Slide002 from './slide_002.js';
import Slide003 from './slide_003.js';
import Slide004 from './slide_004.js';
import Slide005 from './slide_005.js';
import Slide006 from './slide_006.js';
import Slide007 from './slide_007.js';
import Slide008 from './slide_008.js';
import Slide009 from './slide_009.js';
import Slide010 from './slide_010.js';
import Slide011 from './slide_011.js';
import Slide012 from './slide_012.js';
import Slide013 from './slide_013.js';
import Slide014 from './slide_014.js';
import Slide015 from './slide_015.js';
import Slide016 from './slide_016.js';
import Slide017 from './slide_017.js';
import Slide018 from './slide_018.js';
import Slide019 from './slide_019.js';
import Slide020 from './slide_020.js';
import Slide021 from './slide_021.js';
import Slide022 from './slide_022.js';
import Slide023 from './slide_023.js';
import Slide024 from './slide_024.js';
import Slide025 from './slide_025.js';
import Slide026 from './slide_026.js';
import Slide027 from './slide_027.js';
import Slide028 from './slide_028.js';
import Slide029 from './slide_029.js';
import Slide030 from './slide_030.js';

import "./Slides.css"

export default class App extends Component {
    state={
        contents: [
            <Slide000 />,
            <Slide001 />,
            <Slide002 />,
            <Slide003 />,
            <Slide004 />,
            <Slide005 />,
            <Slide006 />,
            <Slide007 />,
            <Slide008 />,
            <Slide009 />,
            <Slide010 />,
            <Slide011 />,
            <Slide012 />,
            <Slide013 />,
            <Slide014 />,
            <Slide015 />,
            <Slide016 />,
            <Slide017 />,
            <Slide018 />,
            <Slide019 />,
            <Slide020 />,
            <Slide021 />,
            <Slide022 />,
            <Slide023 />,
            <Slide024 />,
            <Slide025 />,
            <Slide026 />,
            <Slide027 />,
            <Slide028 />,
            <Slide029 />,
            <Slide030 />
        ]
    }

    componentDidMount( ) {
        this.props.setMax( this.state.contents.length - 1 );
    }

    render( ) {
        return this.state.contents[ this.props.index ];
    }
}