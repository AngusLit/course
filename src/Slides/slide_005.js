import { Component } from 'react';
import Heading from "../Comps/Heading.js";
import MCQ from "../Comps/MCQ/MCQ.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Knowledge check"
                />
                <MCQ
                    question="Which of the following does not explain the relevance of R in statistical analysis and data science?"
                    options={[
                        "Widely used in industry.",
                        "Stores sequences of computer code.",
                        "Opensource.",
                        "Automated."
                    ]}
                    feedback={`R is especially relevant because of 1) how often its requested, 2) its transparent interface which eases reusability, verifying findings and error-checking, as well as 3) it’s widespread use.`}
                />
            </section>
        );
    }
}