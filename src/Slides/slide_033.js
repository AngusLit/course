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
                    text="The global environment"
                />
                <Paragraph
                    component="h1"
                    text={[
                        `When variables are created in RStudio, they are saved in the R environment.`,
                        `When writing code in R, any variables we define, save in a dataframe, and import and save, are stored in our global environment. We can see the artifacts in the environment at the top right of the RStudio interface in the Environment tab.`,
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