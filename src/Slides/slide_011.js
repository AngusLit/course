import { Component } from 'react';
import Heading from '../Comps/Heading/Heading.js';
import Likert from '../Comps/Likert/Likert.js';
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    render() {
        return (
            <Slide>
                <Heading
                    component="h1"
                    text="Pre-assessment"
                />
                <Likert
                    index={ window.sessionStorage.getItem( `index` ) }
                    count={ 5 }
                    question="Install R on a Windows computer."
                />
            </Slide>
        );
    }
}