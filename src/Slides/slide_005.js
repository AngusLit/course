import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
import MCQ from "../Comps/MCQ/MCQ.js";
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Knowledge check"
                />
                <MCQ
                    index={ window.sessionStorage.getItem( `index` ) }
                    question="Which of the following does not explain the relevance of R in statistical analysis and data science?"
                    options={[
                        "Widely used in industry.",
                        "Stores sequences of computer code.",
                        "Opensource.",
                        "Automated."
                    ]}
                    correct={ 3 }
                    feedback={`R is especially relevant because of 1) how often its requested, 2) its transparent interface which eases reusability, verifying findings and error-checking, as well as 3) it’s widespread use.`}
                />
            </Slide>
        );
    }
}