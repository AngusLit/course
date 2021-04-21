import { Component } from 'react';
import Heading from '../Comps/Heading/Heading.js';
import Likert from '../Comps/Likert/Likert.js';
import Slide from "../Comps/Slide/Slide.js";

export default class App extends Component {
    
    render() {
        return (
            <Slide>
                <Heading
                    index={ window.sessionStorage.getItem( `index` ) }
                    component="h1"
                    text="Pre-assessment"
                />
                <Likert 
                    index={ window.sessionStorage.getItem( `index` ) }
                    count={ 5 }
                    question="Explain the relevance of R in statistical analysis and data science."
                />
            </Slide>
        );
    }
}