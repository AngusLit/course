import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Installing tidyverse"
                />
                <Paragraph
                    text={`We could install the packages listed previously, but the creators of tidyverse let you install all these packages by running a single command. Run the following command in the console.`}
                />
                <Code
                    text={[
                        `install.packages("tidyverse")`
                    ]}
                />
                <Paragraph
                    text={`The install.packages() command only needs to be used to download and install packages for the first time.`}
                />
            </section>
        );
    }
}