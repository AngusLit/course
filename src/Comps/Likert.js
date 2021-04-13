import { Component } from 'react';
import "../Slides/Slides.css"

export default class Likert extends Component {
    state = {
        selection: null
    }

    render( ) {
        var arr = [];
        for (let i = 1; i <= this.props.count; i++) {
            arr.push(
                <div  key={ i } className="likert__option">
                    <label htmlFor={ i.toString() }>{ i }</label>
                    <input type="radio" name={this.props.question} id={ i }>
                    </input>
                </div>
            )
        }

        return (
            <form className="likert">
                <p className="likert__question">{ this.props.question }</p>
                { arr }
            </form>
        );
    }
}