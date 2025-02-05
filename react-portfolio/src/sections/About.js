import profile from '../res/img/profile_small.jpg'

const About = () => {
    return (
        <div className="about row" id="about">
            <div className="col">
                <h3 className="aboutme" >1. About Me</h3>
                <p className="body">
                    I graduated in April 2024 from the&nbsp;
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
                    &nbsp;in Kamloops, BC, Canada.&nbsp;
                </p>
                <p className="body">
                    I have one year of professional work experience from two co-ops, one at&nbsp;
                    <a
                        href="https://ca.linkedin.com/company/traqspera"
                        alt="Traqspera Technologies"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Traqspera Technologies
                    </a>
                    &nbsp;as a Full Stack Developer
                    and the other at&nbsp;
                    <a
                        href="https://www.tru.ca/"
                        alt="Thompson Rivers University"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Thompson Rivers University
                    </a>
                    &nbsp;as an Information Security Analyst.
                </p>
                <p className="body">
                    Prior to obtaining my degree, I gained 10 years of transferable skills from working in retail, sales, and legal.
                </p>
                <p className="body">
                    I am always learning and working on projects to further deepen my skills.
                </p>
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