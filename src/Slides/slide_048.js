import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import URL from "../Comps/URL/URL.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
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
                <URL
                    name={[
                        `Cheatsheet`,
                        `Reference guide`
                    ]}
                    hyperlink={[
                        `https://www.rstudio.com/wp-content/uploads/2016/03/rmarkdown-cheatsheet-2.0.pdf?_ga=2.99103574.959061551.1618248339-806358845.1618048924`,
                        `https://www.rstudio.com/wp-content/uploads/2015/03/rmarkdown-reference.pdf?_ga=2.99103574.959061551.1618248339-806358845.1618048924`
                    ]}
                />
                <Paragraph
                    text={[
                        `R Markdown offers a single data science authoring platform, integrating your code, its consequences, and your prose commentary. R Markdown papers, including PDFs, Word files, slideshows, and more, are entirely reproducible and accept thousands of output formats.`,
                        `R Markdown files are structured in three ways to be used:`
                    ]}
                />
                <List
                    text={[
                        `To communicate with decision-makers who prefer to rely on the conclusions, not on the code behind the study.`,
                        `To collaborate with other data scientists (including you in the future!) who are involved in both your findings and how you have achieved them (i.e. the code).`,
                        `As an atmosphere for data science, as a modern lab notebook in which you can document not just what you have achieved, but also what you have been thinking.`
                    ]}
                />
                <Paragraph
                    text={[
                        `A variety of R packages and external software combine with R Markdown. That implies that support is not possible, by-and-large, through? Instead, keep these tools close to hand while you move through this part, and use R Markdown in the future:`
                    ]}
                />
            </Slide>
        );
    }
}