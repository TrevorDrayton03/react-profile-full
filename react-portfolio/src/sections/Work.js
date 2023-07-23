import PetUniverse from '../projects/pet-universe/home2.png'
import IntervalTimer from '../projects/interval-timer/feature2.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ExternalIcon from '../icons/ExternalIcon';
import GithubIcon from '../icons/GithubIcon';
import DocumentationIcon from '../icons/DocumentationIcon'

const Work = ({ projectClick }) => {
    const handlePetUniverseClick = (event) => {
        event.preventDefault();
        projectClick("/pet-universe");
        window.scrollTo(0, 0);
    };
    const handleIntervalTimerClick = (event) => {
        event.preventDefault();
        projectClick("/interval-timer");
        window.scrollTo(0, 0);
    };
    return (
        <div className="work row" id="work">
            <h3>Projects I've Done</h3>
            <div className='row work-project'>
                <div className="col" style={{ display: 'flex' }}>
                    <Card>
                        <a
                            href="/pet-universe"
                            onClick={handlePetUniverseClick}
                        >
                            <div>
                                <Card.Img variant="top" src={PetUniverse} />
                            </div>
                        </a>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="/pet-universe"
                                    onClick={handlePetUniverseClick}
                                >
                                    Pet Universe
                                </a>
                            </Card.Title>
                            <Card.Text>
                                MERN Web Application
                            </Card.Text>
                            {/* <div>
                                <a href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store" target="_blank" alt="Pet Universe Github Repo">
                                    <GithubIcon title="Pet Universe Github Repo" />
                                </a>
                                <a href="https://pet-universe.onrender.com/" target="_blank" alt="Pet Universe External Link">
                                    <ExternalIcon title="Pet Universe External Link" />
                                </a>
                                <a href="https://pet-universe-docs.netlify.app/" target="_blank" alt="Pet Universe External Link">
                                    <DocumentationIcon title="Pet Universe Docs External Link" />
                                </a>
                            </div> */}
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                            <ListGroup.Item>MongoDB, Express.js, Node.js, React.js</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup> */}
                        {/* <Card.Body>
                            <Card.Link
                                href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store"
                                target="_blank"
                                alt="Pet Universe Github"
                            >
                                <GithubIcon />
                            </Card.Link>
                            <Card.Link
                                href="#"
                                target="_blank"
                                alt="Pet Universe"
                            >
                                <ExternalIcon />
                            </Card.Link>
                        </Card.Body> */}
                    </Card>
                </div>
                <div className="col" style={{ display: 'flex' }}>
                    <Card className="card d-flex flex-column">
                        <a
                            href="interval-timer"
                            onClick={handleIntervalTimerClick}
                        >
                            <Card.Img variant="top" src={IntervalTimer} />
                        </a>
                        <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                            <Card.Title>
                                <a
                                    href="/interval-timer"
                                    onClick={handleIntervalTimerClick}
                                >
                                    Interval Timer
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Expo Mobile Application
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Work;