import PetUniverse from '../res/img/home2.png'
import IntervalTimer from '../res/img/feature2.png'
import PhysicsSimulator from '../res/img/physsim.png'
import HybridWorkFromHome from '../res/img/frontpg.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ExternalIcon from '../icons/ExternalIcon';
import GithubIcon from '../icons/GithubIcon';
import DocumentationIcon from '../icons/DocumentationIcon'

const Work = ({ }) => {
    return (
        <div className="work row" id="projects">
            <h3>2. Projects I've Done</h3>
            <div className="card-container">
                <Card>
                    <a
                        href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment"
                        target="_blank"
                        rel="noreferrer"
                        alt="Hybrid Work Security Assessment Github"
                    >
                        <div>
                            <Card.Img variant="top" src={HybridWorkFromHome} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment"
                                target="_blank"
                                rel="noreferrer"
                                alt="Hybrid Work Security Assessment Github"
                            >
                                Hybrid Work Security Assessment
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Web Application and Integration
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a
                                href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment"
                                target="_blank"
                                rel="noreferrer"
                                alt="Hybrid Work Security Assessment Github"
                            >
                                <GithubIcon title="GitHub" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>M(ariaDB)ERN, Apache, Linux, Burp</em></ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/989526576"
                        target="_blank"
                        rel="noreferrer"
                        alt="Physics Simulator"
                    >
                        <div>
                            <Card.Img variant="top" src={PhysicsSimulator} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/989526576"
                                target="_blank"
                                rel="noreferrer"
                                alt="Physics Simulator"
                            >
                                Physics Simulator
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Testing & Verification and DevOps
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a
                                href="https://github.com/TrevorDrayton03/SENG-4110-Physics-Simulator"
                                target="_blank"
                                rel="noreferrer"
                                alt="Physics Simulator"
                            >
                                <GithubIcon title="GitHub" />
                            </a>
                            <a href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/989526576" target="_blank"
                            rel="noreferrer" alt="Physics Simulator Gitlab Pipeline">
                                <ExternalIcon title="GitLab Pipeline" />
                            </a>
                            <a href="https://github.com/TrevorDrayton03/SENG-4110-Physics-Simulator/blob/main/docs/testing.md" target="_blank"
                            rel="noreferrer" alt="Physics Simulator Testing.md">
                                <DocumentationIcon title="Testing.MD" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>C++, Docker, Doxygen, GitLab CI/CD, Google Test</em></ListGroup.Item>
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
                                Interval Timer
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Android Application
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a href="https://github.com/TrevorDrayton03/Interval-Timer" target="_blank"
                            rel="noreferrer" alt="Interval Timer Github Repo">
                                <GithubIcon title="GitHub" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=intevraltime0311.myapp" target="_blank"
                            rel="noreferrer" alt="Interval Timer Play Store Page">
                                <ExternalIcon title="Google Play Store" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>React Native, Expo</em></ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://pet-universe.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                        alt="Pet Universe External Link"
                    >
                        <div>
                            <Card.Img variant="top" src={PetUniverse} />
                        </div>
                    </a>
                    <Card.Body>
                        <Card.Title>
                            <a
                                href="https://pet-universe.onrender.com/"
                                target="_blank"
                                rel="noreferrer"
                                alt="Pet Universe External Link"
                            >
                                Pet Universe
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Web Application
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store" target="_blank"
                            rel="noreferrer" alt="Pet Universe Github Repo">
                                <GithubIcon title="GitHub" />
                            </a>
                            <a href="https://pet-universe.onrender.com/" target="_blank"
                            rel="noreferrer" alt="Pet Universe External Link">
                                <ExternalIcon title="Pet Universe External Link" />
                            </a>
                            <a href="https://pet-universe-docs.netlify.app/" target="_blank"
                            rel="noreferrer" alt="Pet Universe External Link">
                                <DocumentationIcon title="JSDoc Generated Documentation" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>M(ongoDB)ERN, JSDoc</em></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
}

export default Work;