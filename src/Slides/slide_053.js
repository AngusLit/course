import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Question 3"
                />
            </Slide>
        );
    }
}