import { Component } from 'react';
import "./TOC.css"

export default class TOC extends Component {
    render( ) {
        return (
            <ol className="table-of-contents">
                { this.props.text.map( ( val, i ) => {
                        return (
                            <li
                                key={ i }
                                className="toc__tile"
                                onClick={ () => this.props.setIndex( this.props.indices[ i ] ) }
                            >
                                <p className="toc__number">
                                    { i + 1 }
                                </p>
                                <p className="toc__name">
                                    { val }
                                </p>
                            </li>
                        )
                    }
                ) }
            </ol>
        );
    }
}