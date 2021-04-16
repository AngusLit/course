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
                    text="Running RStudio"
                />
                <Paragraph
                    text={[
                        `When we open RStudio, R is automatically launched as well. Any new consumer is often puzzled when they open R instead of RStudio. Look for "RStudio" on the desktop and pin the program to your desired workspace (e.g. Desktop or toolbar).`,
                        `The first time you open RStudio, you will see three windows.`
                    ]}
                />
                <Image
                    type="full"
                    source="./Image.png"
                />
                <Paragraph
                    text={`A fourth window (the console) is hidden by default, but can be opened by pressing CTRL + Shift + N, or clicking the File drop-down menu, then New File, and then R Script.`}
                />
                <Image
                    type="full"
                    source="./Image.png"
                />
            </section>
        );
    }
}