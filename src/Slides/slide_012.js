import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Quote from "../Comps/Quote/Quote.js";
import URL from "../Comps/URL/URL.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
	render() {
		return (
			<Slide>
                <Heading
                    component="h1"
                    text="What to Expect"
                />
				<Paragraph
                    text="To use R, you’ll have to install the R programming environment on your machine. Once R is installed, we can then begin developing data analyses."
                />
				<Paragraph
                    text="Our goal here isn't R mastery, but giving you a direction to start using R for simple data work: extracting key statistics from a data set, exploring a data set with basic graphics, and reshaping data to make it easier analyse."
                />
                <Paragraph
                    text="R can be intimidating at first. People claim it's hard to learn because it varies from other languages, not inherently harder than others. "
                />
                <Quote
                    source="./john-cook.jpeg"
                    quote="I have written software professionally in perhaps a dozen programming languages, and the hardest language for me to learn has been R."
                    citation="— Cook, J.D. (2009)."
                />
                <Paragraph
                    text="The language is actually straightforward, but this statement is revealing."
                />
                <URL
                    name="Cook, J. D. R language for programmers. John D. Cook Consulting. Accessed: 2021/04/11. Available at:"
                    hyperlink="https://www.johndcook.com/blog/r_language_for_programmers/"
                />
			</Slide>
		);
	}
}