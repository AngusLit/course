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
                    type="topic"
                    text="Topic 1: History and Use-cases"
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
                        "Explain the relevance of R in statistical analysis and data science."
                    ] }
                />
                <Timer 
                    time="15"
                />
            </section>
        );
    }
}