import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import URL from "../Comps/URL/URL.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Reflection"
                />
                <Paragraph
                    text="The R screen should start up, and you’re one-step closer to starting writing your code."
                />
                <Image
                    type="full"
                    source="./Image.png"
                />
                <Paragraph
                    type="note"
                    text="If you run into any problems, consult the project-r FAQ to see whether your question’s been answered:"
                />
                <URL
                    name="R for Windows FAQ"
                    hyperlink="https://cran.r-project.org/bin/windows/base/rw-FAQ.html"
                />
            </section>
        );
    }
}