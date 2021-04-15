import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import MCQ from "../Comps/MCQ/MCQ.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Knowledge Check"
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