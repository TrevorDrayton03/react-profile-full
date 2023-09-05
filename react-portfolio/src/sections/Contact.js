import LinkedinIcon from '../icons/LinkedinIcon'
import GithubIcon from '../icons/GithubIcon'
import MailIcon from '../icons/MailIcon'

const Contact = () => {
    return (
        <div className="contact col" id="contact" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <h3>3. What's Next?</h3>
        <h1>Contact Me</h1>
        <a href="mailto:trevorpdrayton@gmail.com" target="_blank">
            <p>trevorpdrayton@gmail.com</p>
        </a>
        <div className="line2">
            <span className="line2-text">
            <a href="https://www.linkedin.com/in/trevor-drayton/" target="_blank">
                <LinkedinIcon />
            </a>
            <a href="https://github.com/TrevorDrayton03" target="_blank">
                <GithubIcon title="Trevor Drayton's Github Repo" />
            </a>
            <a href="mailto:trevorpdrayton@gmail.com" target="_blank">
                <MailIcon />
            </a>
            </span>
        </div>
        </div>
    );
}

export default Contact;