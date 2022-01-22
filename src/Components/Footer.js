export default function Footer() {
  const year = new Date().getFullYear();

  return <div className="footer">
    <div className="sub-footer flex">
      <div className="subFooter_img"></div>
      <div className="newsletter_section">
          <h2 className="primary_header">
              Be a  member <br />of our community 🎉
          </h2>
          <p className="text">We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
          <div className="newsletter-field">
            <form action="#" className="newsletter-form">
              <input type="email"  placeholder="Enter your email address" className="email"/>
              <input type="submit" value="Subscribe" className="uppercase" className='submitBtn'/>
            </form>
          </div>
      </div>
    </div>
    <div className="footer_links_section">
      <div className="link_group">
          <h4 className="link_goup_title">
            Company
          </h4>
          <ul className="footer_links">
            <li><a href="#aboutUs" className="footer_link">About us</a></li>
            <li><a href="#terms" className="footer_link">Term of Use</a></li>
            <li><a href="#policy" className="footer_link">Privacy Policy</a></li>
            <li><a href="press" className="footer_link">Press & Media</a></li>
          </ul>
      </div>
      <div className="link_group">
          <h4 className="link_goup_title">
            Product
          </h4>
          <ul className="footer_links">
            <li><a href="#marketplace" className="footer_link">Markerplace</a></li>
            <li><a href="#magazine" className="footer_link">Magazine</a></li>
            <li><a href="#seller" className="footer_link">Seller</a></li>
            <li><a href="wholesale" className="footer_link">Wholesale</a></li>
            <li><a href="services" className="footer_link">Services</a></li>
          </ul>
      </div>
      <div className="link_group">
          <h4 className="link_goup_title">
            Careers
          </h4>
          <ul className="footer_links">
            <li><a href="#aboutUs" className="footer_link">Become a Cammpus Rep</a></li>
            <li><a href="#terms" className="footer_link">Become a Vasiti influencer</a></li>
            <li><a href="#policy" className="footer_link">Become a Campus writer</a></li>
            <li><a href="press" className="footer_link">Become an Affliate</a></li>
          </ul>
      </div>
      <div className="link_group">
          <h4 className="link_goup_title">
            Get in touch
          </h4>
          <ul className="footer_links">
            <li><a href="#aboutUs" className="footer_link">Contact us</a></li>
            <li><a href="#terms" className="footer_link">Partner with us</a></li>
            <li><a href="#policy" className="footer_link">Advertise with us</a></li>
            <li><a href="#press" className="footer_link">Help/FAQs</a></li>
          </ul>
      </div>
      <div className="link_group flex-grow flex-1">
          <h4 className="link_goup_title">
            Join our community
          </h4>
          <div className="socialMedia_icons">

          </div>
          <p className="emailNesletter">Email Newsletter</p>
      </div>
    </div>
    <p className="copyright flex center">
        Copyright &copy; Vasiti.com {year}. All rights reserved
      </p>
  </div>;
}
