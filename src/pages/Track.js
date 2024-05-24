import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Star from "../assets/images/icons8-star.png"
import Marquee from "react-fast-marquee";


const Track = () => {


    return (
        <div>
            {/* <Navbar /> */}
            <div style={{boxShadow: "0px 2px 3px 0px rgba(178, 42, 48, 1)"}}><Navbar /></div>

            <section style={{ textAlign: "center", backgroundImage: "linear-gradient(#BD0C0C, #FFC24D)", marginTop: 2}}>
            <br /> <br />
                <h1 style={{ fontSize: "25px", fontWeight: "bold", letterSpacing: "0.05em" }}>About Us</h1>
                <br />
               <p style={{  marginLeft: 50, marginRight: 50}}> AIL logistics is a subsidiary of AIL multiservice Ltd, AIL Logistics prides itself as an operator with the most knowledge of the local environment in Ibadan and other neighboring cities. We place high value on maintaining quality in every facet of the organization. Our Mantra “Go Beyond” further reaffirms our excellent processes, customer care deliverables backed with a proficient team.
            </p>
            <h2 style={{ fontSize: "25px", fontWeight: "bold", letterSpacing: "0.05em" }}>Fast Delivery</h2>
            <p style={{  marginLeft: 50, marginRight: 50}}>
AIL logistics offers the fastest delivery in Ibadan. We pick up your orders and deliver in record time at affordable rates.
WHY CHOOSE AIL LOGISTICS?
	•	We deliver all consignments on time.
	•	Our staff and management operates with great integrity
	•	We are innovative and efficient
	•	Customer satisfaction is our topmost priority

OUR OPERATIONS:
Delivery within Ibadan for as low as #1000
We charge based on distance from pick up location to drop off location
We run errands
Business sales delivery
Parcels/document delivery
Food delivery
            </p>
                <br /> <br />
            </section>
            <Marquee style={{backgroundImage: "linear-gradient(#FFC24D, #BD0C0C)", paddingTop: 25, paddingBottom: 25, }}>
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
            <section style={{  padding: 25,bottom: 0, width: "100%", height: "100%",backgroundImage:  "linear-gradient( #181818,#1E1E1E)", }}>
            <Footer  />
            </section>
           
        </div>
    )
}

export default Track