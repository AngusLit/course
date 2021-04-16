import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Timer from "../Comps/Timer/Timer.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Introduction to R Programming"
                />
                <Paragraph
                    type="welcome"
                    text={ [
                        `Welcome to the Introduction to R Programming module, where you'll learn all about one of the most popular and requested statistical programming languages!`,
                        `To get started, click the next button below to dive into the first subtopic.`
                    ] }
                />
                <Paragraph
                    text={`Your module is divided as follows:`}
                />
                <List text={ [
                    `History and Use-cases`,
                    `Installing R`,
                    `Setting up R Studio`,
                    `Working with R Packages`,
                    `Getting the Most with R Markdown`
                ] } />
                <Timer
                    time="90"
                />
            </section>
        );
    }
}