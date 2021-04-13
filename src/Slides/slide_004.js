import { Component } from 'react';
import Heading from "../Comps/Heading.js";
import Paragraph from "../Comps/Paragraph.js";
import Image from "../Comps/Image.js";
import URL from "../Comps/URL.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Slide 4 heading level 1"
                />
                <Image
                    type="right"
                    source="./Image.png"
                />
                <Paragraph
                    text="Elementum eu facilisis sed odio morbi quis. Ornare arcu odio ut sem nulla pharetra. Porttitor leo a diam sollicitudin tempor id eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Orci ac auctor augue mauris augue neque gravida in fermentum. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Eget nullam non nisi est sit amet facilisis magna etiam. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Quam id leo in vitae turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. At auctor urna nunc id cursus metus. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Non tellus orci ac auctor augue. Pulvinar etiam non quam lacus suspendisse faucibus."
                />
                <Heading
                    component="h2"
                    text="Heading level 2"
                />
                <Paragraph
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras. In egestas erat imperdiet sed euismod. Mauris a diam maecenas sed enim ut. At erat pellentesque adipiscing commodo elit at imperdiet dui. Pellentesque sit amet porttitor eget."
                />
                <URL 
                    name="Google.com"
                    hyperlink="https://www.google.com"
                />
               
            </section>
        );
    }
}