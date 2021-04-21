import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Image from "../Comps/Image/Image.js";
import URL from "../Comps/URL/URL.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
	render() {
		return (
			<Slide>
                <Heading
                    component="h1"
                    text="History"
                />
                <Paragraph
                    text="In 1991, R was developed by Ross Ihaka at the Department of Statistics at the University of Auckland. The language was only available in a commercial kit rather than a free one."
                />
                <Image
                    source="ross-ihaka.jpeg"
                    type="profile"
                />
				<Paragraph
                    text="On 1993 the first paper announcing R was written. Ross and Robert developed R in the Journal of Graphical and Statistical Methods in 1996."
                />
				<Paragraph
                    text="R is similar to the S language and environment, and R gained common use a few years after S – which was developed at Bell Laboratories."
                />
                <URL 
                    name="Ross Ihaka and Robert Gentleman. R: A language for data analysis and graphics. Journal of Computational and Graphical Statistics, 5(3):299–314, 1996. Available at: "
                    hyperlink="https://www.jstor.org/stable/1390807?seq=1"
                />
			</Slide>
		);
	}
}