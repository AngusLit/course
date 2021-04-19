import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Timer from "../Comps/Timer/Timer.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Topic 4: Working with R packages"
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
                        "Distinguish between base and distributed R packages.",
                        "Install distributed packages on your machine."
                    ] }
                />
                <Timer 
                    time="15"
                />
            </section>
        );
    }
}