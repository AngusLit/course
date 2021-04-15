import { Component } from 'react';

import Heading from "../Comps/Heading/Heading.js";
import Paragraph from "../Comps/Paragraph/Paragraph.js";

export default class App extends Component {
    render() {
        return (
            <section className="slide">
                <Heading
                    component="h1"
                    text="Installing R for Windows"
                />
                <Heading
                    component="h3"
                    text="Step 1"
                />
                <Paragraph
                    text={`To start, double-click on the file icon to run the installer.`}
                />
                <Paragraph
                    text={`The R Tools will appear in a window. Select your preferred language.`}
                />
                <Paragraph
                    text={`Select "OK"`}
                />
                <Heading
                    component="h3"
                    text="Step 2"
                />
                <Paragraph
                    text={`On the first tab with the Information heading, you can read through the terms of the license agreement.`}
                />
                <Paragraph
                    text={`Select "Next"`}
                />
                <Heading
                    component="h3"
                    text="Step 3"
                />
                <Paragraph
                    text={`On the Select Destination Location tab, you’ll be asked where R should be installed.`}
                />
                <Paragraph
                    text={`It will default to installing R in "C:\\Program Files\\R\\R-X.Y.Z".`}
                />
                <Paragraph
                    text={`Select "Next"`}
                />
                <Heading
                    component="h3"
                    text="Step 4"
                />
                <Paragraph
                    text={`On the Select Components tab you can choose which components to include in your installation.`}
                />
                <Paragraph
                    text={`If you know whether your computer is x36 or x64, you can exclude the other from the installation.`}
                />
                <Paragraph
                    text={`Configure your installation and then select "Next".`}
                />
                <Heading
                    component="h3"
                    text="Step 5"
                />
                <Paragraph
                    text={`On the Startup options tab, you choose whether to use default or custom startup options.`}
                />
                <Paragraph
                    text={`Select “Yes (customized startup)”, and then select “Next”.`}
                />
                <Heading
                    component="h3"
                    text="Step 6"
                />
                <Paragraph
                    text={`If you selected Yes, customised startup, the Display mode tab will display. `}
                />
                <Paragraph
                    text={`Here you can select your display mode as one large window or multiple small ones. To keep everything grouped, select “MDI (one big window)”.`}
                />
                <Paragraph
                    text={`Select "Next"`}
                />
                <Heading
                    component="h3"
                    text="Step 7"
                />
                <Paragraph
                    text={`On the Help mode tab select the format you would like to view help files in.`}
                />
                <Paragraph
                    text={`Select "Next"`}
                />
                <Heading
                    component="h3"
                    text="Step 8"
                />
                <Paragraph
                    text={`Next, you can set the Start Menu folder that R will be saved in. You can leave this as default.`}
                />
                <Paragraph
                    text={`Select "Next"`}
                />
                <Heading
                    component="h3"
                    text="Step 9"
                />
                <Paragraph
                    text={`The next segment advertises additional tasks to complete.`}
                />
                <Paragraph
                    text={`Select the Create a desktop icon, and then select “Next”.`}
                />
                <Heading
                    component="h3"
                    text="Step 10"
                />
                <Paragraph
                    text={`R should now be installing and should take less than five minutes.`}
                />
                <Paragraph
                    text={`Wait for the installer to complete.`}
                />
                <Heading
                    component="h3"
                    text="Step 11"
                />
                <Paragraph
                    text={"Upon completion of the R for Windows Setup Wizard, you'll see the “Completing the R for Windows Setup” screen."}
                />
                <Paragraph
                    text={`Select "Finish"`}
                />
            </section>
        );
    }
}