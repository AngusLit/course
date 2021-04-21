import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="What are R packages?"
                />
                <Paragraph
                    text={[
                        "Much of the functionality in R comes from using packages. Packages are shareable collections of code, data, and documentation. Packages are essentially extensions, or add-ons, to the R program that we installed above.",
                        "There are two main types of packages which can be used for installing and activating features: "
                    ]}
                />
                <List
                    text={[
                        "Base packages, and",
                        "Distributed packages."
                    ]}
                />
                <Paragraph
                    text={[
                        "Base packages come with the installation of R, whereas optional packages are available for download after the fact. In other words, these additional packages do not come with the standard installation of R, so you need to install them yourself.",
                        "In this subtopic, you’ll learn how to use some additional R packages that are useful. For example, the “rmeta” package."
                    ]}
                />
            </Slide>
        );
    }
}