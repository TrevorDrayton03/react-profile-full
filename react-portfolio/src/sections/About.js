import profile from '../res/img/profile_small.jpg'

const About = () => {
    return (
        <div className="about row" id="about">
            <div className="col">
                <h3>About Me</h3>
                {/* <p className="body">
                    I take pride in producing high-quality software.
                    I apply the engineering method to produce software that follows software engineering principles.
                </p> */}
                <p className="body">
                    I am graduating in April 2024 from the&nbsp;
                    <a
                        href="https://www.tru.ca/science/programs/engineering/software-engineering.html"
                        alt="Software Engineering"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Software Engineering, Bachelor of Engineering
                    </a>
                    &nbsp;program at&nbsp;
                    <a
                        href="https://www.tru.ca/"
                        alt="Thompson Rivers University"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Thompson Rivers University
                    </a>
                    &nbsp;in Kamloops, British Columbia, Canada.&nbsp;
                </p>
                <p className="body">
                    My work experience includes co-ops at&nbsp;
                    <a
                        href="https://www.traqspera.com/"
                        alt="Traqspera Technologies"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Traqspera Technologies
                    </a>
                    {/* &nbsp;as a full stack developer and &nbsp; */}
                    &nbsp;and&nbsp;
                    <a
                        href="https://www.tru.ca/"
                        alt="Thompson Rivers University"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Thompson Rivers University
                    </a>.
                    {/* as an information security analyst. */}
                </p>
                <p className="body">
                    At any given time, I have a side project that I work on to further develop my knowledge of technology.
                </p>
                {/* <p className="body">
                    I recently finished a full stack development and integration project during a 4 month co-op at Thompson Rivers University.
                    I am developing software for Thompson Rivers University's Information Security department for the summer (co-op).
                    &nbsp;
                </p> */}
            </div>
            <div className="col" style={{ justifyContent: 'center', display: 'flex' }}>
                <img
                    style={{ marginTop: "40px", objectFit: 'contain' }}
                    src={profile}
                    alt="Profile"
                    width="300px"
                />
            </div>
        </div>
    );
}

export default About;