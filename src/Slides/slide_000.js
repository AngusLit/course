import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import TOC from "../Comps/TOC/TOC.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Timer from "../Comps/Timer/Timer.js";
import Welcome from "../Comps/Welcome/Welcome.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    index={ window.sessionStorage.getItem( `index` ) }
                    component="h1"
                    text="Introduction to R Programming"
                />
                <Welcome
                    index={ window.sessionStorage.getItem( `index` ) }
                    text={ [
                        `Welcome to the Introduction to R Programming module! Here you'll be introduced to one of the most popular and widely requested statistical programming languages.`,
                        `To get started, click the next button below to dive into the first subtopic.`
                    ] }
                />
                <Paragraph
                    index={ window.sessionStorage.getItem( `index` ) }
                    text={`Your module is divided as follows:`}
                />
                <TOC
                    index={ window.sessionStorage.getItem( `index` ) }
                    setIndex={ this.props.setIndex }
                    text={ [
                        `History and use-cases`,
                        `Installing R`,
                        `Setting up RStudio`,
                        `Working with R packages`,
                        `Getting the most with RMarkdown`
                    ] }
                    indices={ [
                        1,
                        10,
                        24,
                        37,
                        46
                    ] }
                />
                <Timer
                    index={ window.sessionStorage.getItem( `index` ) }
                    time="90"
                />
            </section>
        );
    };
};