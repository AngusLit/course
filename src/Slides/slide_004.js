import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
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
                    text={ [
                        "R is a language and environment for statistical computing and graphics. a wide variety of statistical and graphical techniques, and is highly extensible. As such it offers an integrated suite of software facilities for data manipulation, calculation and graphical display, which includes:"
                    ] }
                />
                <List
                    text={[
                        "An effective data handling and storage facility",
                        "A suite of operators for calculations on arrays, in particular matrices",
                        "A large, coherent, integrated collection of intermediate tools for data analysis",
                        "Graphical facilities for data analysis and display either on-screen or on hardcopy, and",
                        "A well-developed, simple and effective programming language which includes conditionals, loops, user-defined recursive functions and input and output facilities."
                    ]}
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