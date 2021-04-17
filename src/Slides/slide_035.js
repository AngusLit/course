import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import URL from "../Comps/URL/URL.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Supplementary reading"
                />
                <Paragraph
                    text="Detailed information on using RStudio can be found at at RStudio’s Website."
                />
                <URL
                    name="RStudio Education"
                    hyperlink="https://education.rstudio.com/"
                />
            </section>
        );
    }
}