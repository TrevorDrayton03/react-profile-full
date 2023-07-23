import ExternalIcon from '../../icons/ExternalIcon';
import GithubIcon from '../../icons/GithubIcon';
import DocumentationIcon from '../../icons/DocumentationIcon';

const IntervalTimer = () => {
    return (
        <div className="project" >
            <h1 style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>
                <a href="https://play.google.com/store/apps/details?id=intevraltime0311.myapp" target="_blank" alt="Interval Timer Github Repo"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    Interval Timer
                </a>
                <div style={{ paddingTop: '10px', paddingLeft: '20px', width: '110px', height: '40px', display: 'flex', flexDirection: 'row' }}>
                    <a href="https://github.com/TrevorDrayton03/Interval-Timer" target="_blank" alt="Interval Timer Github Repo">
                        <GithubIcon title="Interval Timer Github Repo" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=intevraltime0311.myapp" target="_blank" alt="Interval Timer Play Store Page">
                        <ExternalIcon title="Interval Timer External Link" />
                    </a>
                    {/* <a href="https://pet-universe-docs.netlify.app/" target="_blank" alt="Interval Timer External Link">
                        <DocumentationIcon title="Interval Timer Docs External Link" />
                    </a> */}
                </div>
            </h1>
            <p>A personal project.</p>
            <div>
                <h2>Design Requirements</h2>
                <h4>
                    Problem Statement
                </h4>
                <div>
                    Develop an interval app that I can use at the gym with my friends, publish to the app store, and learn about React Native, Expo, and publishing apps in the process.
                </div>
                <h4>
                    Functions
                </h4>
                <div>
                    <ul>
                        <li>
                            Sets a timer interval with round length, rest time, ready time, and number of intervals
                        </li>
                        <li>
                            Stores user-created timers for reuse
                        </li>
                        <li>
                            Restores timer state if accidentally backgrounded when running
                        </li>
                    </ul>
                </div>
                <h4>
                    Objectives
                </h4>
                <div>
                    <ul>
                        <li>
                            Must follow software engineering principles and implement software engineering skills learned in classes
                        </li>
                        <li>
                            Must follow gitflow
                        </li>
                        <li>
                            Must follow agile development
                        </li>
                        <li>
                            Must be robust, reliable, and easy to use
                        </li>
                    </ul>
                </div>
                <h4>
                    Constraints
                </h4>
                <div>
                    <ul>
                        <li>
                            Expo has many restrictions on native OS functionalities
                        </li>
                        <li>
                            Can only pay for the Google App Developer cost ($25)
                        </li>
                        <li>
                            One man team
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Solution</h2>
                <div>
                    <h4>App Component</h4>
                    <ul>
                        <li>The root component that houses the other components</li>
                        <li>Has the main states (roundLength, restLength, readyLength, intervals) and lets its child components set and display them</li>
                    </ul>
                    <h4>Timer Component</h4>
                    <ul>
                        <li>Used to display the round, rest, ready, and interval information to the user</li>
                        <li>Parent to the IncrementDecrementButton and MinuteSecondPicker components</li>
                        <li>Reused four times in the application</li>
                    </ul>
                    <h4>FightClock Component</h4>
                    <ul>
                        <li>Shows the timer when it's running, which round it is, and the current interval</li>
                        <li>Has a pause/resume button</li>
                        <li>Vibrates on round change</li>
                        <li>Has a single bell sound on round change</li>
                        <li>Has a triple bell sound when timer is complete</li>
                        <li>Beeps for each second of the last 3 seconds of each round</li>
                        <li>Determines when the app gets backgrounded and, when foregrounded,
                            gets the time difference and calculates the state it should be in and sets that state to continue running the timer</li>
                    </ul>
                    <h4>IncrementDecrementButton Component</h4>
                    <ul>
                        <li>Increase or decrease the duration by pressing on the icons</li>
                        <li>Press once to increment once, hold down to continuously increment until releasing</li>
                        <li>Child of the Timer component</li>
                    </ul>
                    <h4>MinuteSecondPicker Component</h4>
                    <ul>
                        <li>A Picker component that allows the user to choose minutes or seconds from a dropdown list</li>
                        <li>Users click on the Timer component they want to pick the time for to open this Modal</li>
                        <li>Child of the Timer component</li>
                    </ul>
                    <h4>StoreButton Component</h4>
                    <ul>
                        <li>Opens a Modal that lists user's stored custom timers for selecting</li>
                        <li>Hold down on a stored timer to get the option to delete</li>
                        <li>Press the Save Current Timer button to add a new timer with the current App state</li>
                        <li>Overwrite a timer by adding a new one with the same name</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Learning Outcomes</h2>
                <ul>
                    <li>Asynchronicity in React</li>
                    <li>Expo's limitations on native functionality</li>
                    <li>Google's Material design system</li>
                    <li>Jest, a JavaScript testing framework</li>
                    <li>How to release apps to the Google Play store</li>
                </ul>
            </div>
        </div>
    );
}

export default IntervalTimer;