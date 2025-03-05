import profile from '../res/img/profile_small.jpg'

const About = () => {
    return (
        <div className="about row" id="about">
            <div className="col">
                <h3 className="aboutme" >1. About Me</h3>
                <p className="body">
                    I have experience in full-stack development and cybersecurity, but my passion lies in computer graphics and Vulkan.
                </p>
                <p className="body">
                I am currently building a custom game engine using Vulkan, implementing rendering techniques from scratch to understand the full pipeline.                </p>
                <p className="body">
                    My goal is to work in graphics programming, rendering engineering, or game engine development.
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