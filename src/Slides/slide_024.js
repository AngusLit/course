import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";
import Timer from "../Comps/Timer/Timer.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Topic 3: Setting up RStudio"
                />
                <Heading
                    component="h2"
                    text="Learning Outcomes"
                />
                <Paragraph
                    text="Odio facilisis mauris sit amet massa vitae. Purus sit amet luctus venenatis lectus magna. Neque laoreet suspendisse interdum consectetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. In arcu cursus euismod quis viverra nibh cras pulvinar mattis."
                />
                <Outcomes
                    text={ [
                        "Install and run RStudio on a Windows computer."
                    ] }
                />
                <Timer 
                    time="15"
                />
            </Slide>
        );
    }
}