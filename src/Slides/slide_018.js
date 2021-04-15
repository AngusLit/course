import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import URL from "../Comps/URL/URL.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
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
                    name="R Download mirrors"
                    hyperlink="https://cran.r-project.org/mirrors.html"
                />
                <Paragraph
                    text="The page will list various download locations."
                />
                <Heading
                    component="h3"
                    text="Step 2"
                />
                <Paragraph
                    text="Next, select the URL of a location close to you:"
                />
                <Heading
                    component="h3"
                    text="Step 3"
                />
                <Paragraph
                    text="Click on “Download R for Windows”."
                />
                <Heading
                    component="h3"
                    text="Step 4"
                />
                <Paragraph
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
                    text="Click Download R"
                />
                <Heading
                    component="h3"
                    text="Step 6"
                />
                <Paragraph
                    text="You might be prompted to either save or run a file."
                />
                <Paragraph
                    text="Select “Save”, and to save the folder to your desktop."
                />
            </section>
        );
    }
}