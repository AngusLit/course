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
                    text="Pre-flight Checklist"
                />
                <Heading
                    component="h2"
                    text="Step 3: Getting the latest version"
                />
                <Paragraph
                    text="R is available for download at the following link:"
                />
                <URL
                    name="R-project homepage:"
                    hyperlink="https://www.r-project.org/"
                />
                <Paragraph
                    text="Once R is installed, you can begin performing data analysis."
                />
                <Paragraph
                    type="note"
                    text="Great new releases of R are made daily, and these new versions are being constantly tested and developed."
                />
                <Paragraph
                    text="Updating R periodically is a good idea to ensure that you have an updated version of R. (to ensure compatibility with all the latest versions of the R packages that you have downloaded)."
                />
            </section>
        );
    }
}