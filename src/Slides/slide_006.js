import { Component } from 'react';
import Heading from "../Comps/Heading.js";
import Paragraph from "../Comps/Paragraph.js";
import List from "../Comps/List.js";
import Image from "../Comps/Image.js";

export default class App extends Component {
	render() {
		return (
			<section className="slide">
                <Heading
                    component="h1"
                    text="What is R?"
                />
				<Paragraph
                    text="R is a language and environment for statistical computing and graphics. R is used through a programmable environment that allows you to store an entire complex sequence of computer code steps in a database."
                />
				<Paragraph
                    text="For example:"
                />
                <Image type="full" source="./Image.png" />
			</section>
		);
	}
}