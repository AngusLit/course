import { Component } from 'react';
import Heading from '../Comps/Heading/Heading.js';
import Likert from '../Comps/Likert/Likert.js';

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Post-assessment"
                />
                <Likert 
                    count={ 5 }
                    question="Install R on a Windows computer."
                />
            </section>
        );
    }
}