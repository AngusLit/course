import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="The console"
                />
                <Paragraph
                    text={[
                        `Let’s start off by explaining the Console's features. The Console is a tab inside RStudio which enables the user to run R code.`
                    ]}
                />
                <Paragraph
                    type="note"
                    text={[
                        `If you’re new to using a console, running a command means entering some code into the console, and pressing Enter to execute it.`
                    ]}
                />
                <Paragraph
                    text={[
                        `We'll address the Console in depth later, for now you’ll notice that upon opening R Studio, the console shows the version of R used.`,
                        `Scroll downward, select the entry-field and try typing in some expressions. For example, run this one:`
                    ]}
                />
                <Code
                    text={[
                        `1 + 2`
                    ]}
                />
                <Paragraph
                    text={[
                        `As you should see, using the console to test code on the page allows immediate testing. Your output should look something like:`
                    ]}
                />
                <Image
                    type="center"
                    source="./Image.png"
                />
            </section>
        );
    }
}