import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <div className="flex justify-between p-2 bg-pink-200 rounded-lg shadow-md m-2">
        <div className="w-20">
          <img  src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png" alt="logo-img"/>
        </div>
        <div className="flex items-center">
           <ul className="flex m-4 p-4 cursor-pointer md:flex md:item-center">
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/products">Products</Link></li>
            <li className="px-2"><Link to="/offers">Offers</Link></li>
            <li className="px-2"><Link to="/newly-added-items">Newly-Added-Items</Link></li>
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/contact">Contact us</Link></li>
           </ul>
        </div>
        </div>
    )
}

export default Header