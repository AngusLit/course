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
                    text="Pre-flight checklist"
                />
                <Paragraph
                    text="The instructions will concentrate on installing R on a PC. However, brief notes will be made of how similar commands can be used in Mac or Linux."
                />
                <Heading
                    component="h2"
                    text="Step 1: Determine whether R is mounted"
                />
                <Paragraph
                    text="A good starting point to install R, is to first determine whether R is already installed on your computer (for example, by another user)."
                />
                <Paragraph
                    text="If you are using a Windows device, there are two ways you can check whether R is already installed on your computer."
                />
                <Heading
                    component="h3"
                    text="Option A"
                />
                <Paragraph
                    text="Check if there is a 'R' icon on the desktop of the device that you are using. If yes, double-clicking the “R” icon will immediately start R."
                />
                <Image
                    type="center"
                    source="./r-desktop-icon.png"
                />
                <Heading
                    component="h3"
                    text="Option B"
                />
                <Paragraph
                    text={`Click the “Start” button to open the Start Menu.`}
                />
                <Paragraph
                    text={`See if the word "R" appears in any of the programs that are shown.`}
                />
                <Image
                    type="center"
                    source="./r-start-icon.png"
                />
			</section>
		);
	}
}