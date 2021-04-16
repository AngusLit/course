import { Component } from 'react';
import "./Likert.css"

export default class Likert extends Component {
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

        let contents
        if ( typeof( this.props.question )  === "object"  ) {
            contents = this.props.question.map( (val, i ) => {
                        return (
                            <div className="likert__question">
                                <p className="likert__text">
                                    { val }
                                </p>
                                <div className="likert__options">
                                    { arr }
                                </div>
                            </div>
                        )
                    } )
        } else {
            contents =  <div>
                            <p className="likert__question">{ this.props.question }</p>
                            <div className="likert__options">
                                { arr }
                            </div>
                        </div>
        }

        return (
            <form className="likert">
                <p className="likert__instruction">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36px"
                    viewBox="0 0 24 24"
                    width="36px"
                    fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                </svg>
                    Rate how well you could perform the below outcomes:
                </p>
                { contents }
            </form>
        );
    }
}