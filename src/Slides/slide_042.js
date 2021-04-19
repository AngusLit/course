import { Component } from 'react';

import Code from "../Comps/Code/Code.js";
import Heading from "../Comps/Heading/Heading.js";
import List from "../Comps/List/List.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="What is the tidyverse package?"
                />
                <Paragraph
                    text={[
                        `One of the most popular collection of packages in R is known as the “tidyverse”. Tidyverse is a collection of R packages designed for working with data.`,
                        `It lets you to spend less time cleaning data so that you can focus more on analyzing, visualizing, and modeling data.`,
                        `Tidyverse packages share a common design philosophy, grammar, and data structures. Tidyverse packages “play well together”.`,
                        `The most common “core” tidyverse packages are:`
                    ]}
                />
                <List
                    text={[
                        `readr: for data import.`,
                        `ggplot2: for data visualisation.`,
                        `dplyr: for data manipulation.`,
                        `tidyr: for data tidying.`,
                        `purrr: for functional programming.`,
                        `tibble: for tibbles, a modern re-imagining of dataframes.`,
                        `stringr: for string manipulation.`,
                        `forcats: for working with factors (categorical data).`
                    ]}
                />
            </section>
        );
    }
}