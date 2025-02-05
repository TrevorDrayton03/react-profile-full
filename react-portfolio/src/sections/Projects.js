import PetUniverse from '../res/img/petuniverse.png'
import GoblinGuide from '../res/img/goblinguide.png'
import IntervalTimer from '../res/img/intervaltimer.png'
import PhysicsSimulator from '../res/img/physsim.png'
import HybridWorkFromHome from '../res/img/frontpg.png'
import GLIMPSE from '../res/img/glimpse.png'
import Portfolio from '../res/img/portfolio.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ExternalIcon from '../icons/ExternalIcon';
import GitHubIcon from '../icons/GithubIcon';
import DocumentationIcon from '../icons/DocumentationIcon'
import GooglePlayIcon from '../icons/GooglePlayIcon'
import AppleAppIcon from '../icons/AppleAppIcon'
import WebIcon from '../icons/WebIcon'

const Projects = () => {
    return (
        <div className="work row" id="projects">
            <h3 style={{"marginBottom":"20px"}}>2. Projects</h3>
            <div className="card-container">
                <Card>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.drayton.goblin_guide&hl=en_CA"
                        target="_blank"
                        rel="noreferrer"
                        alt="Google Play Store"
                    >
                        <div>
                            <Card.Img variant="top" src={GoblinGuide} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.drayton.goblin_guide&hl=en_CA"
                                target="_blank"
                                rel="noreferrer"
                                alt="Google Play Store"
                            >
                                Unofficial Dark and Darker Goblin Guide
                            </a>
                        </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.drayton.goblin_guide&hl=en_CA"
                                target="_blank"
                                rel="noreferrer"
                                alt="Google Play Store"
                            >
                                <GooglePlayIcon title="Google Play Store" />
                            </a>
                            <a
                                href="https://apps.apple.com/gb/app/dark-and-darker-goblin-guide/id6670409610?platform=iphone"
                                target="_blank"
                                rel="noreferrer"
                                alt="Apple App Store"
                            >
                                <AppleAppIcon title="Apple App Store" />
                            </a>
                            <a
                                href="https://goblin.guide/"
                                target="_blank"
                                rel="noreferrer"
                                alt="Web Port"
                            >
                                <WebIcon title="Web Port" />
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://github.com/TrevorDrayton03/glimpse"
                        target="_blank"
                        rel="noreferrer"
                        alt="GLIMPSE GitHub"
                    >
                        <div>
                            <Card.Img variant="top" src={GLIMPSE} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://github.com/TrevorDrayton03/glimpse"
                                target="_blank"
                                rel="noreferrer"
                                alt="GLIMPSE GitHub"
                            >
                                GLIMPSE
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Machine Learning Integration, Full Stack Development
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        {/* <ListGroup.Item><em>Machine Learning Models, Django, HTMX</em></ListGroup.Item> */}
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <a
                                href="https://github.com/TrevorDrayton03/glimpse"
                                target="_blank"
                                rel="noreferrer"
                                alt="GLIMPSE GitHub"
                            >
                                <GitHubIcon title="GitHub" />
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment?tab=readme-ov-file#brief-video-demonstration"
                        target="_blank"
                        rel="noreferrer"
                        alt="Hybrid Work Security Assessment GitHub"
                    >
                        <div>
                            <Card.Img variant="top" src={HybridWorkFromHome} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment?tab=readme-ov-file#brief-video-demonstration"
                                target="_blank"
                                rel="noreferrer"
                                alt="Hybrid Work Security Assessment GitHub"
                            >
                                Hybrid Work Security Assessment
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Cyber Security, DevOps, Full Stack Development, Co-op Project
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        {/* <ListGroup.Item><em>MariaDB, Express, React, Apache, Kali Linux</em></ListGroup.Item> */}
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <a
                                href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment?tab=readme-ov-file#brief-video-demonstration"
                                target="_blank"
                                rel="noreferrer"
                                alt="Hybrid Work Security Assessment GitHub"
                            >
                                <GitHubIcon title="GitHub" />
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="card d-flex flex-column">
                    <a
                        href="https://play.google.com/store/apps/details?id=intevraltime0311.myapp"
                        target="_blank"
                        rel="noreferrer"
                        alt="Interval Timer Play Store Page"
                    >
                        <Card.Img variant="top" src={IntervalTimer} />
                    </a>
                    <Card.Body className="d-flex flex-column justify-content-start align-items-center">
                        <Card.Title>
                            <a
                                href="https://play.google.com/store/apps/details?id=intevraltime0311.myapp"
                                target="_blank"
                                rel="noreferrer"
                                alt="Interval Timer Play Store Page"
                            >
                                Dark Mode Interval Timer
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Mobile Development, Personal Project
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        {/* <ListGroup.Item><em>React Native, Expo</em></ListGroup.Item> */}
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <a href="https://play.google.com/store/apps/details?id=intevraltime0311.myapp" target="_blank"
                            rel="noreferrer" alt="Interval Timer Play Store Page">
                                <GooglePlayIcon title="Interval Timer on Google Play Store" />
                            </a>
                            <a href="https://github.com/TrevorDrayton03/Interval-Timer" target="_blank"
                            rel="noreferrer" alt="Interval Timer GitHub">
                                <GitHubIcon title="GitHub" />
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://github.com/TrevorDrayton03/react-profile-full"
                        target="_blank"
                        rel="noreferrer"
                        alt="Portfolio GitHub"
                    >
                        <div>
                            <Card.Img variant="top" src={Portfolio} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://github.com/TrevorDrayton03/react-profile-full"
                                target="_blank"
                                rel="noreferrer"
                                alt="Portfolio GitHub"
                            >
                                Dark Mode Portfolio
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Web Development, Personal Project
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        {/* <ListGroup.Item><em>React, Bootstrap</em></ListGroup.Item> */}
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                <a href="https://github.com/TrevorDrayton03/react-profile-full" target="_blank"
                                rel="noreferrer" alt="Portfolio GitHub">
                                    <GitHubIcon title="GitHub" />
                                </a>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store"
                        target="_blank"
                        rel="noreferrer"
                        alt="Online Pet Store GitHub"
                    >
                        <div>
                            <Card.Img variant="top" src={PetUniverse} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store"
                                target="_blank"
                                rel="noreferrer"
                                alt="Online Pet Store GitHub"
                            >
                                Online Pet Store
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Full Stack Development, University Project
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        {/* <ListGroup.Item><em>MongoDB, Express, React, JSDoc</em></ListGroup.Item> */}
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <a href="https://pet-universe.onrender.com/" target="_blank"
                            rel="noreferrer" alt="Online Pet Store External Link">
                                <WebIcon title="Online Pet Store External Link" />
                            </a>
                            <a href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store" target="_blank"
                            rel="noreferrer" alt="Online Pet Store GitHub">
                                <GitHubIcon title="GitHub" />
                            </a>
                            <a href="https://pet-universe-docs.netlify.app/" target="_blank"
                            rel="noreferrer" alt="Online Pet Store Documentation Link">
                                <DocumentationIcon title="JSDoc Generated Documentation" />
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://github.com/TrevorDrayton03/SENG-4110-Physics-Simulator"
                        target="_blank"
                        rel="noreferrer"
                        alt="Simulation Quality Assurance Tool"
                    >
                        <div>
                            <Card.Img variant="top" src={PhysicsSimulator} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://github.com/TrevorDrayton03/SENG-4110-Physics-Simulator"
                                target="_blank"
                                rel="noreferrer"
                                alt="Simulation Quality Assurance Tool"
                            >
                                Physics Simulation Testing and Verification
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Unit, Integration, and System Testing in OOP, CI/CD, University Project
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center'}}>
                        {/* <ListGroup.Item><em>C++, Docker, Doxygen, Google Test, CMAKE</em></ListGroup.Item> */}
                        <ListGroup.Item style={{marginTop: "10px"}}>
                            <a
                                href="https://github.com/TrevorDrayton03/SENG-4110-Physics-Simulator"
                                target="_blank"
                                rel="noreferrer"
                                alt="Simulation Quality Assurance Tool"
                            >
                                <GitHubIcon title="GitHub" />
                            </a>
                            <a href="https://trevordrayton03.gitlab.io/-/SENG-4110-Physics-Simulator/-/jobs/5150915226/artifacts/docs/html/index.html" target="_blank"
                            rel="noreferrer" alt="Doxygen Generated Documentation">
                                <DocumentationIcon title="Doxygen Generated Documentation" />
                            </a>
                            <a href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/1014408973" target="_blank"
                            rel="noreferrer" alt="Simulation Quality Assurance Tool CI/CD Pipeline">
                                <ExternalIcon title="Simulation Quality Assurance Tool CI/CD Pipeline" />
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
}

export default Projects;