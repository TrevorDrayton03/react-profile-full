import PetUniverse from '../projects/pet-universe/home2.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ExternalIcon from '../icons/ExternalIcon';
import GithubIcon from '../icons/GithubIcon';

const Work = ({ projectClick }) => {
    const handleClick = (event) => {
        event.preventDefault();
        projectClick("/pet-universe");
    };
    return (
        <div className="work row" id="work">
            <h3>Work I've Done</h3>
            <div className='row'>
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
                                    href="/#"
                                >
                                    Pet Universe
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Full-stack web application with MERN.
                            </Card.Text>
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
                                alt="Pet Universe Netlify"
                            >
                                <ExternalIcon />
                            </Card.Link>
                        </Card.Body> */}
                    </Card>
                </div>

                <div className="col">
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
                                alt="Pet Universe Netlify"
                            >
                                <ExternalIcon />
                            </Card.Link>
                        </Card.Body> */}
                    </Card>
                </div>
            </div>
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
                </div>
            </div>
        </div>
    );
}

export default Work;