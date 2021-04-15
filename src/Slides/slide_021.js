import { Component } from 'react';

import Code from "../Comps/Heading/Heading.js";
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Heading/Heading.js";
import Likert from "../Comps/Heading/Heading.js";
import List from "../Comps/Heading/Heading.js";
import MCQ from "../Comps/Heading/Heading.js";
import Outcomes from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Heading/Heading.js";
import Quote from "../Comps/Heading/Heading.js";
import Timer from "../Comps/Heading/Heading.js";
import URL from "../Comps/Heading/Heading.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="slide_021.js heading"
                />
            </section>
        );
    }
}