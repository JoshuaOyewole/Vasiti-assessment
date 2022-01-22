import logo from '../Assets/Vasiti-Logo-black.png'


function Navbar() {
  return (
  <>
  <nav className='navbar'>
      <div className="logo">
          <img src={logo} alt="Visit Logo" />
      </div>
      <ul className="nav_list">
          <li className='links'><a href= '/about' >About us</a></li>
          <li className='links'><a href= '/stories' >Stories</a></li>
          <li className='links'><a href= '/contact' >Contact</a></li>
          <li className='links'><a href= '/login' >Login</a></li>
          <li className=' uppercase nav_primary_btn'><a className='white' href= '/signup' >Sign up</a></li>
      </ul>
  </nav>
    <ul className="nav_list link__list py-s center">
          <li className='navbar_links px-s'><a href= '/about' >MarketPlace</a></li>
          <li className='navbar_links px-s'><a href= '/stories' >WHOLESALE CENTER</a></li>
          <li className='navbar_links px-s'><a href= '/contact' >SELLER CENTER</a></li>
          <li className='navbar_links px-s'><a href= '/login' >SERVICES</a></li>
          <li className='navbar_links px-s'><a href= '/login' >INTERNSHIPS</a></li>
          <li className='navbar_links px-s'><a href= '/login' >EVENTS</a></li>
  </ul>
  </>)
}

export default Navbar;
