import { useEffect } from "react"
// components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar"
// data
import offers from "../data/Offers"
// animation
import TextChange from "../libs/ReactSpring"
import Slide from "../libs/Slider"
// images
import  isendImg1 from "../assets/images/isend-img1.png"
import Marquee from "react-fast-marquee";
import insta from "../assets/images/icons8-instagram-94.png"
import email from "../assets/images/icons8-email-96.png"
import Star from "../assets/images/icons8-star.png"
function Home() {
    // Get state of current user
        const auth = sessionStorage.getItem("loggedIn");
        //Slider Animation for Homepage
        useEffect(() =>{
            Slide()
        })
    return (
        <>
            {/* Navbar Section */}
            <div style={{ boxShadow: "0px 2px 3px 0px rgba(178, 42, 48, 1)"}}>{auth ? <UserNavbar/> :<Navbar />}</div>
            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* Hero Section */}
            {/* backgroundColor: "#BD0C0C" */}
            <section id="hero-section"  style={{ backgroundImage: "linear-gradient(#BD0C0C, #FFC24D)", marginTop: 2 ,padding: 50}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="hero-section-h1"><span className="">Affordable </span>& Trusted Delivery Service</h1>
                            <p className="hero-paragraph">Your sure plug for swift and affordable deliveries. Message us today for an efficient and hassle-free <span className="text-change"><TextChange/>.</span></p>
                            <a href="https://wa.me/+2348038763125?text=Hello, AIL Logistics. Are you available today?" target="_blank">
<button className="cta">Book a delivery Today!</button></a>
                        </div>
                        <div className="col-lg-6">
                            <img className="isend-img1" src={isendImg1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------------------------------------------------------------------------------------------------- */}
            {/* What We Offer */}
            <section id="what-we-offer" data-aos="slide-up" style={{ backgroundColor: "whitesmoke", marginTop: -80, padding: 50, marginBottom: 0 }}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{display:"block", margin:"auto 0"}}>
                    <h2 className="wwo-header"><b>What We Offer</b></h2>
                    <p>Get your orders dispatched and delivered within 24 hours. </p>
                    <br /> <br />
                    </div>
                    <div className="col-lg-6">
                    <div className="row">
                        {offers.map((items) => (
                            <div className="col-lg-6" key={items.id}>
                                <div className="offers-container"> 
                                 <div>
                                     <img className="offers-img" src={items.image} alt="" />
                                    </div>
                                    <h5><b>{items.text}</b></h5>
                                    <p>{items.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>  
                        </div>
                        
                </div>   
                
                </div>

      
            </section>
            <Marquee style={{backgroundImage: "linear-gradient(#FFC24D, #BD0C0C)", paddingTop: 20, paddingBottom: 20, }}>
        <span style={{color: "white", marginLeft: 15 }}>
          <img src={Star} alt="Star" style={{ height: 20}}/> Fast Delivery
        </span>{" "}
        &nbsp; &nbsp;
        <span style={{color: "white", marginLeft: 15 }}>
          <img src={Star} alt="Star" style={{  height: 20}}/> Fleet Management
        </span>
        &nbsp; &nbsp;
        <span style={{color: "white", marginLeft: 15 }}>
          <img src={Star} alt="Star" style={{  height: 20}} /> Freight Services
        </span>
        &nbsp; &nbsp;
        <span style={{color: "white", marginLeft: 15 }}>
          <img src={Star} alt="Star" style={{  height: 20}}/> Customer Satisfaction
        </span>
        &nbsp; &nbsp;
      </Marquee>
            <section id="what-customers-say" data-aos="slide-up" style={{  padding: 20}}>
        
                    <h4 className="what-customers-say">How to Reach Us?</h4>
                    {/* <p className="what-customers-say-p2" style={{opacity:"0.6"}}>See what our customers, riders, and vendors have to say about us.</p>
                            <br/>
                    <p className="what-customers-say-p2">Super Reliable, their customer service team was exceptional, I'd definitely recommend.</p>
                        <br/> */}
                    <p>Check Our Socials or Send Us a Mail </p>
                    <br />
                    
                    <a href="https://www.instagram.com/ail_logistics_?igsh=MWZucmZrenl3Y2diYQ=="> <img src={insta} alt="frame" style={{ height: 60, width: 60, cursor: "pointer", marginRight: 15}}/> </a>

                    <a href="mailto:ailmultiserviceltd@gmail.com"><img src={email} alt="frame" style={{ height: 60, width: 60,  cursor: "pointer", marginLeft: 15}}/></a>
            </section>
            {/* ---------------------------------------------------------------------------------------------- */}
            {/* FAQ */}
            <section id="faq"  style={{ backgroundImage:  "linear-gradient(#FFC24D, #BD0C0C)", padding: 50,  marginBottom: 0}}>
                    <h3 className="FAQ-h1">Frequently Asked Questions</h3>
                    <br />
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Why Choose AIL Logistics?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                <strong>•</strong>	We deliver all consignments on time.<br></br>
                                <strong>•</strong>		Our staff and management operates with great integrity.<br></br>
                                <strong>•</strong>		We are innovative and efficient. <br></br>
                                <strong>•</strong>		Customer satisfaction is our topmost priority.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What are your delivery rates?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                               <strong>•</strong>	Delivery within Ibadan for as low as <strong>#1000</strong>, <br></br>
                               <strong>•</strong>	We charge based on distance from pick up location to drop off location 
                                                           
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Can I pay on delivery?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <strong>No!</strong> We do not offer payment on delivery.
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
            {/* -------------------------------------------------------------------------------------------------- */}
      
            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* Footer-Section */}
            <section style={{ padding: 10,backgroundImage:  "linear-gradient( #181818,#1E1E1E)"}}>
            <Footer  />
            </section>
        </>
    )
}

export default Home