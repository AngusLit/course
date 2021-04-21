import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import URL from "../Comps/URL/URL.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Why Install RStudio?"
                />
                <Paragraph
                    text={[
                        "RStudio is similar to the standard RGui but is considerably more user friendly. It has more drop-down menus, windows with multiple tabs, and many customization options.",
                        "RStudio is an integrated development environment (IDE) that allows you to interact with R more readily.",
                        "RStudio can be downloaded following similar steps to download R."
                    ]}
                />
                <URL
                    name="RStudio"
                    hyperlink="https://www.rstudio.com/products/rstudio/download/#download"
                />
            </Slide>
        );
    }
}