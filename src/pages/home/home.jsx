import Navbar from "../../components/navbar/navbar";

import "./home.css";


function Home(){
    return( 
        <>
         <Navbar></Navbar>

        <center><div className="header-image">
        <img className="titleimg" src="https://1.bp.blogspot.com/-kn1iLjwgWak/X7dr3A0A1GI/AAAAAAAAAqE/WctlOi_Oquk3S-6CH6DpPfwRoFRtSq5DQCLcBGAsYHQ/s512/veda-rigveda-vedas-in-hindi-rigved-ved.png" alt="title" />
        </div></center>
        <br></br>
        <hr></hr>
        <div id="about">
            <center><h2 className="heading">About US</h2></center>
            <blockquote>
            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            </blockquote>
            <blockquote>
            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </blockquote>
        </div>
        <br></br>
        <hr></hr>
        <div id="contact">
        <center><h3 className="heading">CONTACT US</h3></center>
        <center>
        <a href="https://mail.google.com/mail/u/0/#inbox" className="phone"><i class="fas fa-envelope-open-text"></i></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" className="phone"><i class="fas fa-phone"></i></a>
        <a href="https://mail.google.com/mail/u/0/#inbox" className="phone"><i class="fab fa-twitter-square"></i></a>
        </center>
        </div>

        </>
    );
}
export default Home;