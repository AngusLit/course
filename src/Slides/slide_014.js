import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
	render() {
		return (
			<Slide>
                <Heading
                    component="h1"
                    text="Pre-flight Checklist"
                />
                <Heading
                    component="h2"
                    text="Step 2: Ensure you have the latest version"
                />
                <Paragraph
                    text="Even if you may have the older version of R installed on your Windows PC, it is still worth upgrading to the newer version to ensure that you have the latest R features."
                />
                <Paragraph
                    text="To find out the new version of R, you should check out the CRAN webpage:"
                />
                <Paragraph
                    text="Beyond “the latest release,” it will say something like “R-2.12.1.tar.gz”, implying the version number. The new release of R is [X.X.X] . (for example, 2.12.1)."
                />
			</Slide>
		);
	}
}