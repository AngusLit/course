import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Reflection"
                />
                <Paragraph
                    text="Well done on navigating through R’s site and getting your file."
                />
                <Paragraph
                    text="Next, we’ll install R and RGui."
                />
            </section>
        );
    }
}