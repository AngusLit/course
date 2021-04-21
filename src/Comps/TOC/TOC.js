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
                                className={ `toc__tile`}
                            >
                                <p className="toc__number">
                                    { i + 1 }
                                </p>

                                <p className="toc__name">
                                    { this.props.text[ i ] }
                                </p>

                                <p className="toc__time">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">
                                        <g>
                                            <rect fill="none" height="24" width="24" />
                                        </g>
                                        <g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    ±{ this.props.time[ i ] } min
                                </p>

                                <p className="toc__completion">
                                    { this.props.completion[  i ] }%
                                </p>

                                <p className="toc__description">
                                    { this.props.description[ i ] }
                                </p>



                                <p
                                    className="toc__launch"
                                    onClick={ ( ) => this.props.setIndex( this.props.indices[ i ] ) }
                                >
                                    START
                                </p>
                            </li>
                        )
                    }
                ) }
            </ol>
        );
    }
}