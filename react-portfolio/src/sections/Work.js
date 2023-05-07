import PetUniverse from '../projects/pet-universe/home2.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ExternalIcon from '../icons/ExternalIcon';
import GithubIcon from '../icons/GithubIcon';
import DocumentationIcon from '../icons/DocumentationIcon'

const Work = ({ projectClick }) => {
    const handleClick = (event) => {
        event.preventDefault();
        projectClick("/pet-universe");
        window.scrollTo(0, 0); // scroll to the top of the page
    };
    return (
        <div className="work row" id="work">
            <h3>Work I've Done</h3>
            <div className='row work-project'>
                <div className="col">
                    <Card>
                        <a
                            href="/pet-universe"
                            onClick={handleClick}
                        >
                            <Card.Img variant="top" src={PetUniverse} />
                        </a>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="/pet-universe"
                                    onClick={handleClick}
                                >
                                    Pet Universe
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Full-stack MERN web application.
                            </Card.Text>
                            <div>
                                <a href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store" target="_blank" alt="Pet Universe Github Repo">
                                    <GithubIcon title="Pet Universe Github Repo" />
                                </a>
                                <a href="https://pet-universe.onrender.com/" target="_blank" alt="Pet Universe External Link">
                                    <ExternalIcon title="Pet Universe External Link" />
                                </a>
                                <a href="https://pet-universe-docs.netlify.app/" target="_blank" alt="Pet Universe External Link">
                                    <DocumentationIcon title="Pet Universe Docs External Link" />
                                </a>
                            </div>
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

                {/* <div className="col">
                    <Card>
                        <a
                            href="/pet-universe"
                        >
                            <Card.Img variant="top" src={PetUniverse} />
                        </a>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="/#"
                                >
                                    Pet Universe
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Full-stack web application with MERN.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>MongoDB, Express.js, Node.js, React.js</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
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
                        </Card.Body>
                    </Card>
                </div> */}
                {/* </div>
            <div className='row' style={{ marginTop: '30px' }}>
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src={PetUniverse} />
                        <Card.Body>
                            <Card.Title>Pet Universe</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>MongoDB, Express.js, Node.js, React.js</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Github</Card.Link>
                            <Card.Link href="#">External</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card>
                        <Card.Img variant="top" src={PetUniverse} />
                        <Card.Body>
                            <Card.Title>Pet Universe</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>MongoDB, Express.js, Node.js, React.js</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Github</Card.Link>
                            <Card.Link href="#">External</Card.Link>
                        </Card.Body>
                    </Card>
                </div> */}
            </div>
        </div>
    );
}

export default Work;