import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import URL from "../Comps/URL/URL.js";
import Quote from "../Comps/Quote/Quote.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Why Learn R?"
                />
                <Paragraph
                    text="According to Hal Varian, chief economist at Google:"
                />
                <Quote
                    source="./hal-varian.jpeg"
                    quote="The great beauty of R is that you can modify it to do all sorts of things. And you have a lot of pre-packaged stuff that’s already available, so you’re standing on the shoulders of giants."
                    citation="— Vance, A. (2009)."
                />
                <URL 
                    name="Vance, A. 2009. Data Analysts Captivated by R’s Power. New York Times. Accessed: 2021/04/11. Available at: "
                    hyperlink="https://www.nytimes.com/2009/01/07/technology/business-computing/07program.html"
                />
            </section>
        );
    }
}