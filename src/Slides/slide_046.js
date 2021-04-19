import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Topic 5: Getting the most with RMarkdown"
                />
                <Heading
                    component="h2"
                    text="Learning outcomes"
                />
                <Outcomes
                    text={[
                        `Explain the uses of RMarkdown`,
                        `Install RMarkdown in RStudio`
                    ]}
                />
            </section>
        );
    }
}