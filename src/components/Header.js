// Import Assets


const Header = () => {
    return (
        <section className='header'>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGbTgNFL-LfBg/profile-displayphoto-shrink_800_800/0/1577986340037?e=1670457600&v=beta&t=sH8gaSyYZZ48VVFmlz0YrKch0-YFhAFusP_r_ZBL-8E" alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Anthony Colasante</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:colasantecoding@gmail.com"><button  className='button'>Get In Touch</button></a>
            </div>
        </section>
    );
}

export default Header;