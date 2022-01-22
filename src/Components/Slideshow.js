import slideshowImg from '../Assets/Testimonial_image1.png'
export default function Slideshow() {
  return <div className="slideshow">
    <div className="text_Section">
      <h1 className="title">
          Amazing <br /> Experiences from Our Wonderful Customers
      </h1>
      <p className="sub_title">
        Here is what customers and vendors are saying about us, you can share your stories with us too.
      </p>
    </div>
    <div className="img_section">
      <img src={slideshowImg} alt="Amazing Experiences from Our Wonderful Customers" className='slideshowImg'/>
    </div>
  </div>;
}
