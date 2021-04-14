import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";
import Timer from "../Comps/Timer/Timer.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Learning Outcomes"
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