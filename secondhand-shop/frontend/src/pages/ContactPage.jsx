import './CSS/ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>

            <div className="contact-content">
                <p className="contact-description">
                    If you have any questions about your order, shipping, or
                    returns. We're happy to help!
                </p>

                <div className="contact-info">
                    <p>
                       Active: Everyday 11am - 7pm
                    </p>
                    <p>
                        Email:{' '}
                        <a href="mailto:shupashupa@support.com">
                            shupashupa@support.com
                        </a>
                    </p>
                </div>

                <div className="contact-social">
                    <p>Follow us for style inspo & updates:</p>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>{' '}
                    |
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
