const Intro = () => {
    return (
        <div className="intro">
            <p>Hello, my name is</p>
            <h1>Trevor Drayton.</h1>
            <h2>I produce high quality software.</h2>
            <p className="body">
                I am a student in the&nbsp;
                <span className="link-container">
                    <a
                        href="https://www.tru.ca/science/programs/engineering/software-engineering.html"
                        alt="Software Engineering"
                        target="_blank">
                        Software Engineering, Bachelor of Engineering</a>
                    &nbsp;program at&nbsp;
                    <a href="https://www.tru.ca/" target="_blank">
                        Thompson Rivers University
                    </a>&nbsp;in Kamloops, British Columbia, Canada.&nbsp;
                </span>
            </p>
            <p className="body">
                I have 8 months of full stack development experience from a co-op at&nbsp;
                <a href="https://www.traqspera.com/" target="_blank">
                    Traqspera Technologies
                </a>&nbsp;in Kamloops.
            </p>
            <p className="body">
                My goal is to work on products that make a positive impact on the people and world around us.
            </p>
        </div>
    );
}

export default Intro