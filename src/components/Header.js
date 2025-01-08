// Import Assets

const linkedinPhoto = "https://anthony-profileproject-bucket.s3.us-central-1.ionoscloud.com/linkedin profile picture.jpg"
const Header = () => {
    return (
        <section className='header'>
            <img src={linkedinPhoto} />

            <div className='header__content'>
                <h1>Hi, I'm Anthony Colasante</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:colasantecoding@gmail.com"><button  className='button'>Get In Touch</button></a>
            </div>
        </section>
    );
}

export default Header;