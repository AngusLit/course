import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Running the Installer"
                />
                <Paragraph
                    type="note"
                    text="This section is intended to guide you through the installation. You are not required to memorise the steps."
                />
                <Paragraph
                    text="Instead, ensure you understand the process well enough to perform the installation in future."
                />
                <Paragraph
                    text="For a walkthrough to installing R, complete this guide. It will take you through a step-by-step process to install and run R on a Windows machine."
                />
            </Slide>
        );
    }
}