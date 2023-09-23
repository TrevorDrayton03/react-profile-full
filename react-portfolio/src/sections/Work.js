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
                        alt="Security Compliance Evaluation Tool Github"
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
                                alt="Security Compliance Evaluation Tool Github"
                            >
                                Security Compliance Evaluation Tool
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Web Development, DevOps, Software Integration
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a
                                href="https://github.com/TrevorDrayton03/hybrid-work-security-assessment"
                                target="_blank"
                                rel="noreferrer"
                                alt="Security Compliance Evaluation Tool Github"
                            >
                                <GithubIcon title="GitHub" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>M[ariaDB]ERN, Apache, Linux, Burp</em></ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card>
                    <a
                        href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/1014408973"
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
                                href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/1014408973"
                                target="_blank"
                                rel="noreferrer"
                                alt="Simulation Quality Assurance Tool"
                            >
                                Simulation Testing and Verification
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Unit, Integration, and System Testing, CI/CD
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a
                                href="https://github.com/TrevorDrayton03/SENG-4110-Physics-Simulator"
                                target="_blank"
                                rel="noreferrer"
                                alt="Simulation Quality Assurance Tool"
                            >
                                <GithubIcon title="GitHub" />
                            </a>
                            <a href="https://gitlab.com/TrevorDrayton03/SENG-4110-Physics-Simulator/-/pipelines/1014408973" target="_blank"
                            rel="noreferrer" alt="Simulation Quality Assurance Tool CI/CD Pipeline">
                                <ExternalIcon title="Simulation Quality Assurance Tool CI/CD Pipeline" />
                            </a>
                            <a href="https://trevordrayton03.gitlab.io/-/SENG-4110-Physics-Simulator/-/jobs/5150915226/artifacts/docs/html/index.html" target="_blank"
                            rel="noreferrer" alt="Doxygen Generated Documentation">
                                <DocumentationIcon title="Doxygen Generated Documentation" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>C++, Docker, Doxygen, GitLab, Google Test, CMAKE</em></ListGroup.Item>
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
                            Mobile Development
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
                        alt="Online Pet Store External Link"
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
                                alt="Online Pet Store External Link"
                            >
                                Online Pet Store
                            </a>
                        </Card.Title>
                        <Card.Text>
                            Web Development
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
                        <ListGroup.Item>
                            <a href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store" target="_blank"
                            rel="noreferrer" alt="Online Pet Store Github Repo">
                                <GithubIcon title="GitHub" />
                            </a>
                            <a href="https://pet-universe.onrender.com/" target="_blank"
                            rel="noreferrer" alt="Online Pet Store External Link">
                                <ExternalIcon title="Online Pet Store External Link" />
                            </a>
                            <a href="https://pet-universe-docs.netlify.app/" target="_blank"
                            rel="noreferrer" alt="Online Pet Store External Link">
                                <DocumentationIcon title="JSDoc Generated Documentation" />
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item><em>M[ongoDB]ERN, JSDoc</em></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
}

export default Work;