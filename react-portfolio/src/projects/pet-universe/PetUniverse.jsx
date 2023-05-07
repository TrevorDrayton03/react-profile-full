import ExternalIcon from '../../icons/ExternalIcon';
import GithubIcon from '../../icons/GithubIcon';
import DocumentationIcon from '../../icons/DocumentationIcon';

const PetUniverse = () => {
    return (
        <div className="project" >
            <h1 style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>
                <a href="https://pet-universe.onrender.com/" target="_blank" alt="Pet Universe Github Repo"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    Pet Universe
                </a>
                <div style={{ paddingTop: '10px', paddingLeft: '20px', width: '150px', height: '40px', display: 'flex', flexDirection: 'row' }}>
                    <a href="https://github.com/TrevorDrayton03/SENG-4640-Online-Pet-Store" target="_blank" alt="Pet Universe Github Repo">
                        <GithubIcon title="Pet Universe Github Repo" />
                    </a>
                    <a href="https://pet-universe.onrender.com/" target="_blank" alt="Pet Universe External Link">
                        <ExternalIcon title="Pet Universe External Link" />
                    </a>
                    <a href="https://pet-universe-docs.netlify.app/" target="_blank" alt="Pet Universe External Link">
                        <DocumentationIcon title="Pet Universe Docs External Link" />
                    </a>
                    {/* https://pet-universe-docs.netlify.app/ */}
                </div>
            </h1>
            <div>
                <h2>Design Requirements</h2>
                <h4>
                    Problem Statement
                </h4>
                <div>
                    Provide a platform for users to purchase pets and pet supplies online.
                    The challenge of the proposed solution is to meet the specific requirements of the client, which includes designing and developing a web application that is user-friendly, responsive, and robust.
                </div>
                <h4>
                    Functions
                </h4>
                <div>
                    <ul>
                        <li>
                            Admins can manage pets and supplies on the front end
                        </li>
                        <li>
                            Customers can contact customer service and access FAQs
                        </li>
                        <li>
                            Customers can checkout pets and supplies
                        </li>
                    </ul>
                </div>
                <h4>
                    Objectives
                </h4>
                <div>
                    <ul>
                        <li>
                            The website must be user-centered, prioritizing the needs of the user and providing a positive user experience
                        </li>
                        <li>
                            The website must be functional, enabling users to accomplish their goals effectively
                        </li>
                        <li>
                            The website must be technologically advanced, utilizing the latest web application technology
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Solution</h2>
                <div>
                    {/* <h3>Features</h3> */}
                    <h4>UI Design</h4>
                    <ul>
                        <li>Complementing colour scheme that is consistent throughout the application.</li>
                        <li>Emphasizes or de-emphasizes information using font-weight and font-size.</li>
                        <li>Replication of pets and supplies pages and type icons on home, pets, and supplies; dynamic loading of icons due to fetching the types from the backend and mapping over them to produce images.</li>
                        <li>Simple and responsive via minimal amounts of information, words, and via React Components.</li>
                    </ul>
                    <h4>App (root) Component</h4>
                    <ul>
                        <li>Allows cart items and quantities, cart total and admin login state to be maintained throughout use of the application. In other words, the app will remember these states regardless of what the users do in the application.</li>
                        <li>The application updates itself asynchronously using React component lifecycle methods; the pages do not need to be refreshed to be updated.</li>
                    </ul>
                    <h4>Navbar Component</h4>
                    <ul>
                        <li>Allows users to navigate between the pages of the application.</li>
                        <li>Visual indicator for the current selected page.</li>
                        <li>Visual indicator for the amount of items in the cart.</li>
                    </ul>

                    <h4>Home Page Component</h4>
                    <ul>
                        <li>About Section: Introduces the user to Pet Universe.</li>
                        <li>Featured Pet Section: Users get a sneak-peak at random pets in the database via a carousel. This is a visually attractive feature that catches users' interests and introduces them to pets they may have not seen otherwise. Users can click on the pet to go directly to the pet’s product details page.</li>
                        <li>Shop by Pet Section: Users can go from the Home Page to the Pets page and simultaneously apply a pet filter.</li>
                        <li>Shop by Supply Section: Users can go from the Home Page to the Supplies page and simultaneously apply a supply filter.</li>
                    </ul>

                    <h4>Admin Component</h4>
                    <ul>
                        <li>Admins can login if their user information is in MongoDB via asynchronous http requests.</li>
                        <li>Admins can see a table of data for their selected product type (pets or supplies).</li>
                        <li>Admins can search the table in the search bar.</li>
                        <li>Admins can add, update, and delete products.</li>
                        <li>Admins are required to fill in mandatory product information for the modal forms, the mandatory fields which are defined in the schemas.</li>
                        <li>Admins are alerted by an “are you sure you want to delete” message when deleting a product.</li>
                    </ul>

                    <h4>Customer Service Component</h4>
                    <ul>
                        <li>FAQ section: Text displays answers to frequently asked questions. Phone number is provided for any further questions or concerns.</li>
                        <li>Embedded email form: Utilizes formsubmit.io to send a real email to trevorpdrayton@gmail.com.</li>
                    </ul>

                    <h4>Cart Component</h4>
                    <ul>
                        <li>Displays each cart with an option to remove it or, if it’s a supply, to change the quantity of it.</li>
                        <li>Checkout will produce a modal that must be filled, followed by a successful alert. After checking out, the pet that was purchased will be removed from the database.</li>
                    </ul>

                    <h4>Documentation</h4>
                    <ul>
                        <li>JSDoc generated documentation for the react components, the controller, and the models.</li>
                    </ul>
                    {/* </ul> */}
                    {/* <h3>Component Diagram</h3> */}
                </div>
            </div>
        </div>
    );
}

export default PetUniverse;