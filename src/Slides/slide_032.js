import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Viewing variables"
                />
                <Paragraph
                    component="h1"
                    text={[
                        `Viewing variables`,
                        `Mac OS X: Option + -`,
                        `Windows/Linux: Alt + -`,
                        `When we type result into the console and hit enter, we see the stored value of 3:`,
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