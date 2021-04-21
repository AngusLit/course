import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Objects and operators"
                />
                <Paragraph
                    text="The output of this command can be stored in a variable using the assignment operator."
                />
                <Code
                    text={[
                        `result <- 1 + 2`]}
                />
                <Paragraph
                    type="note"
                    text={[
                        `The <- is called the assignment operator. This operator assigns values to variables. The command above is translated into a sentence as:`,
                        `Create a variable named “result” and assign it the value of 1+2.`
                    ]}
                />
                <Paragraph
                    text={[
                        `Here, we have called our significant variable:`
                    ]}
                />
                <Image
                    type="center"
                    source="./Image.png"
                />
            </Slide>
        );
    }
}