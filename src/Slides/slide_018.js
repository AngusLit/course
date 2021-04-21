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
                    text="Downloading R for Windows"
                />
                <Heading
                    component="h3"
                    text="Step 1"
                />
                <Paragraph
                    text="First, you’ll need to open the following URL in your web browser."
                />
                <URL   
                    name="CRAN - Mirrors"
                    hyperlink="https://cran.r-project.org/mirrors.html"
                />
                <Paragraph
                    type="instruction"
                    text="Open the URL above in your browser."
                />
                <Heading
                    component="h3"
                    text="Step 2"
                />
                <Paragraph
                    text="The page will list various download locations."
                />
                <Paragraph
                    type="instruction"
                    text="Next, select the URL of a location close to you."
                />
                <Heading
                    component="h3"
                    text="Step 3"
                />
                <Paragraph
                    type="instruction"
                    text="Click on “Download R for Windows”."
                />
                <Heading
                    component="h3"
                    text="Step 4"
                />
                <Paragraph
                    type="instruction"
                    text="Click on the “base” hyperlink."
                />
                <Heading
                    component="h3"
                    text="Step 5"
                />
                <Paragraph
                    text="On the next tab, you should see a link featuring a download button for R version 4.0.5. (or R X.Y.Z, where X.Y.Z gives the version of R, eg. R 2.11.1)."
                />
                <Paragraph
                    type="instruction"
                    text="Click Download R."
                />
                <Heading
                    component="h3"
                    text="Step 6"
                />
                <Paragraph
                    text="You might be prompted to either save or run a file."
                />
                <Paragraph
                    type="instruction"
                    text="Select “Save”, and to save the folder to your desktop."
                />
                <Heading
                    component="h3"
                    text="Reflection"
                />
                <Paragraph
                    text="Well done on navigating through R’s site and getting your file."
                />
                <Paragraph
                    text="Next, we’ll install R and RGui."
                />
            </Slide>
        );
    }
}