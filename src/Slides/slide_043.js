import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import Image from "../Comps/Image/Image.js";
import Likert from "../Comps/Likert/Likert.js";
import List from "../Comps/List/List.js";
import MCQ from "../Comps/MCQ/MCQ.js";
import Outcomes from "../Comps/Outcomes/Outcomes.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";
import Quote from "../Comps/Quote/Quote.js";
import Timer from "../Comps/Timer/Timer.js";
import URL from "../Comps/URL/URL.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Knowledge check"
                />
                <MCQ
                    question="Which of the following is the URL for R’s official site?"
                    options={[
                        "r-language.org",
                        "r-studio.org",
                        "rstudio.com",
                        "get-r.org"
                    ]}
                    correct={ 1 }
                    feedback={`r-project.org is R’s official site. Remembering may be helpful if you have to install R on a machine in future.`}
                />
            </section>
        );
    }
}