//import '../App.css';
import { useState } from 'react'
import Banner from './Banner';
import logoApp from '../assets/logoApp.gif';
import VotingList from './VotingList';
import Cart from './Cart';
import '../styles/Layout.css';


function App() {
  const [cart, updateCart] = useState([])
  return (

      <div>
        <Banner>
          <img src={logoApp} alt='Cat mash' className='cmh-logoApp' />
          <h1 className='cmh-title'>Cat mash</h1>
        </Banner>
        <div className='cmh-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
				<VotingList cart={cart} updateCart={updateCart} />
        </div>
      </div>
    
  )
}
export default App;
