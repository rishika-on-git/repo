import './About.css';
import image from '../../assets/exploreProgramme1.png'

const About = ()=>{
    return(
        <>
        <div className='aboutsection' id="about">
            {/* <div className="aboutheading"></div> */}
            <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-5xl"
          >
            What is OSDHack?
          
            {/* <span className="sm:block"> Increase Conversion. </span> */}
          </h1>
            <div className="aboutcontent">
            OSDHack’23 was a hybrid hackathon organized by the Open-Source Developers Community of JIIT, Noida. A four-day event dated 21-24 April 2023, which entailed the main hacking event. It was a 48-hour long congregation of like-minded hackers and tech enthusiasts where participants brainstormed and built on their ideas. The online hackathon was organized with Devfolio as a partner and saw over 450 participants all across India from notable institutions such as IITs, IIITs, NITs, VIT, TIET, LNMIIT, IGDTUW etc. The offline hackathon was organized by the Open-Source Developers Community (OSDC) of Jaypee Institute of Information Technology (JIIT), Noida. The highly­anticipated event provided a unique platform for tech enthusiasts and hackers to come together and showcase their talents. The hackathon spanned over 48 hours where participants were invited to brainstorm and build on their innovative ideas. Participation of 500+ students and 90+ teams in the offline version & of 400+ students and 90+ teams in the online version of the event was observed and the opening ceremony was honored by distinguished dignitaries including Vice Chancellor Prof. B.R. Mehta, HOD (CSE&IT) Prof. Vikas Saxena, Faculty Coordinator-OSDC Prof. Manish Kumar Thakur followed by our revered guest speaker Ankur Saxena (Founder – Groffers & Zomato).
            </div>
            <div className="aboutimages">
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
        </>
    )
}

export default About;