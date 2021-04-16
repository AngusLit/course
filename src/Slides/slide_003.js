import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text={`Why learn R?`}
                />
				<Paragraph
                    text={`There are 3 major reasons to learn about R:`}
                />
                <List text={ [
                    `First, in the Data Science job market, R is one of the most requested programming languages.`,
                    [
                        `Let’s you remember previous work in the same field of data analysis more easily than a point-and-click interface.`,
                        `Makes it easier for you to verify research findings and check your work for errors – the mantra of "Make sure your work is reproducible!" is popular amongst gurus of the R language.`
                    ],
                    `R is common.`,
                    [
                        `More than 10,000 add-on packages`,
                        `95,000+ members of LinkedIn's R group`,
                        `400+ R Meetup groups currently in operation.`,
                        `Used by Facebook and Google for evaluating user actions and enhancing online advertising's effectiveness.`
                    ],
                    `R is free, open source, strong, and easy-to-use.`
                ] } />
                <Image
                    style={{width: "128px", display: "block", margin: "auto"}}
                    source="./r-logo.svg"
                />
            </section>
        );
    }
}