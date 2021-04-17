import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Likert from "../Comps/Likert/Likert.js";
import List from "../Comps/List/List.js";
import MCQ from "../Comps/MCQ/MCQ.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Quote from "../Comps/Quote/Quote.js";
import Timer from "../Comps/Timer/Timer.js";
import URL from "../Comps/URL/URL.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="RMarkdown"
                />
                <Paragraph
                    text={ `R Markdown offers a single data science authoring platform, integrating your code, its consequences, and your prose commentary. R Markdown papers, including PDFs, Word files, slideshows, and more, are entirely reproducible and accept thousands of output formats.`}
                />
                <Code
                    text={[
                        `install.packages("rmarkdown");`
                    ]}
                />
            </section>
        );
    }
}