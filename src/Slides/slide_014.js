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
                    text="Results"
                />
                <Paragraph
                    text="If you find the icon using either steps, it means that the R program is already installed on your computer and you can start R by selecting R at the top of the list."
                />
			</section>
		);
	}
}