import LinkedinIcon from '../icons/LinkedinIcon'
import GithubIcon from '../icons/GithubIcon'
import MailIcon from '../icons/MailIcon'

const Contact = () => {
    return (
        <div className="contact col" id="contact" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <h3>3. What's Next?</h3>
        <h1>Contact Me</h1>
        <a href="mailto:trevorpdrayton@gmail.com" target="_blank" rel="noreferrer">
            <p>trevorpdrayton@gmail.com</p>
        </a>
        <div className="line2">
            <span className="line2-text">
            {/* <a href="https://www.linkedin.com/in/trevor-drayton/" target="_blank" rel="noreferrer">
                <LinkedinIcon />
            </a> */}
            {/* <a href="https://github.com/TrevorDrayton03" target="_blank" rel="noreferrer">
                <GithubIcon title="Trevor Drayton's Github Repo" />
            </a> */}
            {/* <a href="mailto:trevorpdrayton@gmail.com" target="_blank" rel="noreferrer">
                <MailIcon />
            </a> */}
            </span>
        </div>
        <div>
            <p style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', fontSize:'18px', color:"var(--color-on-surface-2)" }}>
                If you’re looking for someone who values resilience, adaptability, and a genuine commitment to continuous self-improvement, let’s connect.
            </p>
        </div>
        </div>
    );
}

export default Contact;