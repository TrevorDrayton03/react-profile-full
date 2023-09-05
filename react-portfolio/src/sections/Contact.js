import LinkedinIcon from '../icons/LinkedinIcon'
import GithubIcon from '../icons/GithubIcon'

const Contact = () => {
    return (
        <div className="contact col" id="contact" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <h3>3. What's Next?</h3>
            <h1>Contact Me</h1>
            <a href="mailto:trevorpdrayton@gmail.com" target="_blank">
                <p>trevorpdrayton@gmail.com</p>
            </a>
            <a href="https://github.com/TrevorDrayton03/" target="_blank">
                <p>See more on Github</p>
            </a>
            <a href="https://www.linkedin.com/in/trevor-drayton/" target="_blank">
                <p>Connect on LinkedIn</p>
            </a>
        </div>
    );
}

export default Contact;