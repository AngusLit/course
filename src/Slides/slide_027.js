import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Installing R"
                />
                <Heading
                    component="h2"
                    text="Step 1"
                />
                <Paragraph
                    text="Like when you installed R, the first step with RStudio is to run the installer."
                />
                <Paragraph 
                    type="instruction"
                    text={`Select "Next".`}
                />
                <Heading
                    component="h2"
                    text="Step 2"
                />
                <Paragraph
                    text="Next, choose the install location."
                />
                <Paragraph 
                    type="instruction"
                    text={`Select "Next".`}
                />
                <Heading
                    component="h2"
                    text="Step 3"
                />
                <Paragraph
                    text="Next, you can set the start menu location of R. Leaving it as default will install it in R."
                />
                <Paragraph 
                    type="instruction"
                    text={`Select "Install".`}
                />
                <Heading
                    component="h2"
                    text="Step 4"
                />
                <Paragraph 
                    type="instruction"
                    text={`Wait for the installer to complete.`}
                />
                <Heading
                    component="h2"
                    text="Step 5"
                />
                <Paragraph 
                    type="instruction"
                    text={`Select "Finish" to close the installer.`}
                />
            </section>
        );
    }
}