import logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <>
          <div className="footer">

                <div>
                      <a href='/track-order'><p>About Us</p></a>
                      <a href="mailto:ailmultiserviceltd@gmail.com"><p>ailmultiserviceltd@gmail.com</p></a>
                    <a href="tel:08038763125"><p>+234 803 876 3125</p></a>
                    
                </div>
       
          </div>
                <div className="map-responsive">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.218833624445!2d3.9291142416517184!3d7.403685560634403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103992dc3d5f95bd%3A0x28b52676dc7a7f6!2sIwo%20Road%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1716391718662!5m2!1sen!2sng" width="300" height="300" style={{ border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </>
    )
}

export default Footer