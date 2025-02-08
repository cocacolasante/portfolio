// Import Assets

import { useEffect, useState } from "react";

const linkedinPhoto = "https://anthony-profileproject-bucket.s3.us-central-1.ionoscloud.com/linkedin profile picture.jpg"




const Header = () => {
    const [fact, setFact] = useState("")

    useEffect(()=>{
        fetch("http://74.208.234.81:8080/randomfact")
      .then(response => response.json()) // or response.json() if the endpoint returns JSON
      .then(data => {
        console.log(data.fact_text)
        setFact(data.fact_text);
      })
      .catch(error => {
        console.error("Error fetching random fact:", error);
      });
    },[])
    return (
        <section className='header'>
            <img alt="headshot" src={linkedinPhoto} />

            <div className='header__content'>
                <h1>Hi, I'm Anthony Colasante</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:colasantecoding@gmail.com"><button  className='button'>Get In Touch</button></a>
                <p style={{ fontSize: '1rem' }}>Random Fact: {fact}</p>
            </div>
        </section>
    );
}

export default Header;