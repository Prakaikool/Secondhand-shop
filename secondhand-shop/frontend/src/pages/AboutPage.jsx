import './CSS/AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            <h2 className="about-title">About us</h2>
            <div className="about-content">
                <div className="about-image">
                    <img
                        src="/shupa-owner.jpeg"
                        alt="Shupa taem"
                    />
                </div>
                <div className="about-text">
                    <p>
                        Welcome to Shupa Shupa, <br />
                        <br />A small but passionate secondhand shop built from
                        my own wardrobe and love for sustainability. I started
                        Shupa Shupa because I wanted to give my pre-loved
                        clothes a new life and inspire others to do the same.
                        Every item in our shop is handpicked, cared for, and
                        full of stories.
                    </p>
                    <p>
                        By choosing secondhand, you're not just saving money.
                        You're saving the planet, one garment at a time. We
                        believe fashion should be slow, stylish, and
                        sustainable.
                    </p>
                    <p>
                        Our mission is to reduce fast fashion waste and
                        encourage conscious shopping.
                    </p>
                    <p>
                        Whether you're here to browse, buy, or just get
                        inspired, I'm so happy you found us. Let's make
                        secondhand your first choice.
                    </p>
                    <p>With love, The Shupa Shupa Team</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
