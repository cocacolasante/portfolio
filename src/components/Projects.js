// Import Assets
import defibeats from "../assets/defibeatscreenshot.png"
import socialverification from "../assets/socialverification.png"
import cryptixss from "../assets/cryptix-screenshot.png"

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

           

                <div className="projects__card">
                    <h3>Social Post Verification</h3>
                    <img src={socialverification} alt="aialiens Swap Page" />
                    <p>
                        With the rise of AI generated content, we utilize the blockchain to verify your posts 
                        to the blockchain. From there, you will have a QR code you can attached/embed in your images or videos
                        to link to either your total list of verified posts or an individual post.

                        
                    </p>

                    <a rel="noreferrer" href="https://socialpostverification.vercel.app/ " target="_blank" className="button">Site</a>
                    <a rel="noreferrer" href="https://github.com/cocacolasante/socialpostverification" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DegenBeat Music Marketplace (in development)</h3>
                    <img src={defibeats} alt="defi beats Landing Page" />
                    <p>
                        A fully decentralized, NFT based, music marketplace and social media plateform. 
                        Users can create their own profiles, display a status message, upload their own
                        songs, mint them to the blockchain and list them for sale.

                        Website Alpha coming soon
                    </p>

                    <a rel="noreferrer" href="https://broken-sun-4203.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a rel="noreferrer" href="https://github.com/cocacolasante/defibeatsv2" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Cryptix(in development)</h3>
                    <img src={cryptixss} alt="abx Landing Page" />
                    <p>
                        Decentralized NFT Ticket creation platform and marketplace
                        Create your own event and nft ticket system and collectible
                        
                    
                    </p>

                    <a rel="noreferrer" href="https://plain-butterfly-8263.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a rel="noreferrer" href="https://github.com/cocacolasante/cryptixv3" target="_blank" className="button">Code</a>
                </div>


            </div>
        </section>
    );
}

export default Projects;