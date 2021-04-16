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
                    text="Orienting Yourself"
                />
                <Paragraph
                    text={`Hover over the different windows in the image below to learn more about what it’s used for.`}
                />
                <Image
                    type="full"
                    source="./Image.png"
                />
            </section>
        );
    }
}