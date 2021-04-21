import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Timer from "../Comps/Timer/Timer.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
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
            </Slide>
        );
    }
}