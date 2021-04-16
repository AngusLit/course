import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Starting R for the First Time"
                />
                <Paragraph
                    text="To start R, you can follow the simple steps below."
                />
                <Heading
                    component="h2"
                    text="Option A"
                />
                <Paragraph
                    text="If you selected “Create a desktop shortcut”. "
                />
                <List
                    text={[
                        "Locate the 'R' icon on the device you’re using.",
                        "Double-click the “R” icon to start R."
                    ]}
                />
                <Heading
                    component="h2"
                    text="Option B"
                />
                <Paragraph
                    text="Click the R x64 X.X.X icon on your desktop."
                />
                <Paragraph
                    text={`If you did not select “Create a desktop shortcut".`}
                />
                <List
                    text={[
                        "Click on your Windows “Start” button,",
                        "Choose “All programs”, and",
                        "Start R by selecting “R” (or R X.X.X, where X.X.X gives the version of R, eg. R 2.10.0) from the menu of programs."
                    ]}
                />
            </section>
        );
    }
}