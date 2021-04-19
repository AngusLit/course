import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Installing R packages"
                />
                <Paragraph
                    text="Once you have R running on your machine, you can install an additional package by following these steps:"
                />
                <Heading
                    component="h2"
                    text="Option A"
                />
                <List
                    text={[
                        "Press CTRL + Shift + N to open the console.", 
                        "Type the following command into the console and press Enter:"
                    ]}
                />
                <Code
                    text={[
                        `install.packages("rmeta")`
                    ]}
                />
                <Heading
                    component="h2"
                    text="Option B"
                />
                <Heading
                    component="h3"
                    text="Step 1"
                />
                <Paragraph
                    text={[
                        `Once you have started R, select “Tools” and then select “Install packages…”`
                    ]}
                />
                <Image
                    type="center"
                    source="./Image.png"
                />
                <Heading
                    component="h3"
                    text="Step 2"
                />
                <Paragraph
                    text={[
                        `This will open the Install Packages modal. In the Packages text-entry field, you need to specify the name of the package you want to download (eg. “rmeta”).`
                    ]}
                />
                <Image
                    type="center"
                    source="./Image.png"
                />
                <Heading
                    component="h3"
                    text="Step 3"
                />
                <Paragraph
                    text={[
                        `Ensure, install dependencies is selected and then click the Install button.`,
                        `This will install the “rmeta” package.`
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