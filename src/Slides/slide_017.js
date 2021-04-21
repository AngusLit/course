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
                    text="Install R on a Windows PC"
                />
                <Paragraph
                    type="note"
                    text="The following instructions are for installing R on a Windows device."
                />
                <Paragraph
                    text="If you want to install R on a non-Windows computer, you can download the required R installer for that operating system at:"
                />
                <URL
                    name="The Comprehensive R Archive Network:"
                    hyperlink="https://cran.mirror.ac.za/"
                />
                <Paragraph
                    text="Follow the R installation instructions for that operating system at:"
                />
                <URL
                    name={[
                        "MacOS X:",
                        "Linux:"
                    ]}
                    hyperlink={[
                        "https://cran.r-project.org/bin/macosx/",
                        "https://cran.r-project.org/doc/manuals/R-admin.html#Installing-R-under-Unix_002dalikes"
                    ]}
                />
            </Slide>
        );
    }
}