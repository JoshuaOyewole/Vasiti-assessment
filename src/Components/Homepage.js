import Navbar from "./Navbar";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Tolu_JoyImg from '../Assets/experience.png'
import ExperienceBtn from "./ExperienceBtn";
import Customer from "./Customer";

// IMAGES FOR CUSTOMER EXPERIENCE SECTION
import customer_img1 from '../Assets/testImg1.png'
import customer_img2 from '../Assets/testImg2.png'
import customer_img3 from '../Assets/testImg3.png'
import customer_img4 from '../Assets/testImg34.png'
import customer_img5 from '../Assets/testImg5.png'
import customer_img6 from '../Assets/testImg6.png'
import customer_img7 from '../Assets/testImg7.png'
import customer_img8 from '../Assets/testImg8.png'
import customer_img9 from '../Assets/testImg9.png'
import customer_img10 from '../Assets/testImg10.png'
import customer_img11 from '../Assets/testImg11.png'
import customer_img12 from '../Assets/testImg12.png'
import josiah_JoyImg from '../Assets/woman-shoppingbag-card.png'

export default function Homepage() {
  return (
    <div className='main'>
      <header className="header">
        <Navbar />
        <Slideshow />
      </header>
      <div className="experience_section">
        <div className="experience_img_section">
          <img src={Tolu_JoyImg} alt="Amazing Experiences from Our Wonderful Customers" className='tolu_JoyImg_experince'/>
        </div>
          <div className="text_Section">
          <h2 className="secondary_header secondary_header_white">
              Tolu & Joy’s Experience
          </h2>
          <p className="customer_heading">
              customer
          </p>
          <p className="experinece_section white">
            I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
          </p>
          <ExperienceBtn>Share your own story!</ExperienceBtn>
        </div>
      </div>
      <section className="customer_experience container">
        <div className="grid-3">
            <Customer customer_img={customer_img1} customer_name='Joseph Ike' customer_location='In Ikeja' title='Customer'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img2} customer_name='Adetola Fashina' customer_location='Ibadan' title='Customer'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img3} customer_name='Emmanuel Fayemi' customer_location='In Akoka' title='Customer'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img4} customer_name='Chisom Obilor' customer_location='In Magodo' title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img5} customer_name='Adunoluwa Adeyemi' customer_location='Iwo Road' title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img6} customer_name='Chidi Okeke' customer_location='In Somolu' title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
        </div>
      </section>
      <div className="experience_section josiah_experience">
        
          <div className="text_Section">
          <h2 className="secondary_header">
            Josiah’s Experience
          </h2>
          <h4 className='customer_title customer_title2 uppercase orange'>Vendor</h4>
          <p className="experinece_section black">
            I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
          </p>
          <ExperienceBtn color='orange'>Share your own story!</ExperienceBtn>
        </div>
        <div className="experience_img_section">
          <img src={josiah_JoyImg} alt="Amazing Experiences from Our Wonderful Customers" className='josiah_JoyImg_experince'/>
        </div>
      </div>
      <section className="customer_experience container">
        <div className="grid-3">
            <Customer customer_img={customer_img7} customer_name='Temi Obadofin'  title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img8} customer_name='Promise Ejiofor' title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img9} customer_name='Feyisola Arinola' title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img10} customer_name='Karen Ibeh'  title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img11} customer_name='Oluchi Uzo' title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
            <Customer customer_img={customer_img12} customer_name='Amos Okafor'  title='Vendor'>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
            </Customer>
        </div>
      </section>
      <Footer />
    </div>
  )
}
