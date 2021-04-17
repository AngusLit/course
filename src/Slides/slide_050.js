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
                    text="Formative Assessment"
                />
                <Paragraph
                    text={[`This assessment will test you ability to:`]}
                />
                <List
                    text={[
                        `Explain the relevance of R in statistical analysis and data science.`,
                        `Install R on a Windows computer.`,
                        `Install RStudio on a Windows computer.`,
                        `Distinguish between base and distributed R packages.`,
                        `Install distributed packages on your machine.`,
                        `Explain the uses of RMarkdown.`
                    ]}
                />
                <Timer
                    time="15"
                />
            </section>
        );
    }
}