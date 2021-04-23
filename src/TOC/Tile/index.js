import { Component } from "react";

export default class Tile extends Component {
    render() {
        return (
            <li className="toc__tile">
                <p className="toc__number">
                    {  this.props.number }
                </p>

                <p className="toc__name">
                    { this.props.title }
                </p>

                <p className="toc__time">
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">
                        <rect fill="none" height="24" width="24" />
                        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.2,16.2L11,13V7h1.5v5.2l4.5,2.7L16.2,16.2z" />
                    </svg>
                    ±{ this.props.time } min
                </p>

                <p className="toc__completion">
                    { 0 }%
                </p>

                <p className="toc__description">
                    { this.props.description }
                </p>

                <p
                    className={ this.props.className }
                    onClick={ this.props.start }
                >
                    START
                </p>
            </li>
        );
    };
};