

export default function Customer(props) {
    const {customer_img, customer_name, customer_location, title, children} = props

  return <div className=' flex col customer'>
            <img src={customer_img} alt={children} className='customer_img'/>
            <h2 className="customer_name">{customer_name}</h2>
            <div className="flex align-center">
                {
                    customer_location ? (<h4  className="customer_location ml-0">
                    {customer_location}
                </h4>) : null
                }
                <h4 className={title==='Customer' && customer_location === false? 'customer_title uppercase ml-0': 'customer_title uppercase green ml-0'}>{title}</h4>
            </div>
            <p className="customer_feedback">
                {children}
            </p>
  </div>;
}
