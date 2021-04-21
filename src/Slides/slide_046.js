import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
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
            </Slide>
        );
    }
}