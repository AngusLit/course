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
                    text="Topic 3: Working with RStudio"
                />
                <Heading
                    component="h2"
                    text="Learning Outcomes"
                />
                <Outcomes
                    text={ [
                        "Install and run RStudio on a Windows computer."
                    ] }
                />
                <Timer 
                    time="15"
                />
            </section>
        );
    }
}