import { Component } from 'react';
import Heading from "../Comps/Heading/Heading.js";
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
                    index={ window.sessionStorage.getItem( `index` ) }
                    question="During which decade was R developed?"
                    options={[
                        "1970s",
                        "1980s",
                        "1990s",
                        "2000s"
                    ]}
                    correct={ 2 }
                    feedback={`R was developed in 1991 by Ross Ihaka.`}
                />
            </section>
        );
    }
}