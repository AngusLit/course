import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Results"
                />
                <Paragraph
                    text={[
                        `We'll be able to display our project's results in the Results tab. It is stated that 3 is the variable's value.`,
                        `To absolutely clean the desktop, click on the broom icon at the top of the screen:`
                    ]}
                />
                <Image
                    type="center"
                    source="./Image.png"
                />
                <Paragraph
                    text={[
                        `To remove selected objects from the workspace, select the Grid view from the dropdown menu:`
                    ]}
                />
                <Image
                    type="center"
                    source="./Image.png"
                />
                <Paragraph
                    text={[
                        `Here we can check the boxes of the objects we’d like to remove and use the broom icon to clear them from our Global Environment.`
                    ]}
                />
            </Slide>
        );
    }
}