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
                    text="Verifying your installation"
                />
                <Paragraph
                    text={`Regardless of which option you chose, you can verify your installation by running the following command in the console.`}
                />
                <Paragraph
                    type="instruction"
                    text={`Type the following instruction in the console.`}
                />
                <Code
                    text={[`
                        packageVersion("rmeta")
                    `]}
                />
                <Paragraph
                    text={[
                        `If you see the version number, the “rmeta” package is now installed.`,
                        `Whenever you want to use the “rmeta” package after this, after starting R, you first have to load the package by typing into the R console:`
                    ]}
                />
                <Code
                    text={[
                        `library("rmeta")`
                    ]}
                />
            </section>
        );
    }
}