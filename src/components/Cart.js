import { useState } from 'react'
import '../styles/Cart.css'


function Cart({cart,updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, catType) => acc + catType.amount ,
		0
	)
	return isOpen ? (
		<div className='cmh-cart'>
			<button
				className='cmh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            <br/>
		{cart.length > 0 ? (
	        <div>
			<h3>Votre sélection</h3>
			<ul>
				{cart.map(({ name,amount }, index) => (
					<div key={`${name}-${index}`}>
						{name} {amount}
					</div>
				))}
			</ul>
			<h3>Votes : {total}</h3>
			<button onClick={() => updateCart([])}>Initialiser</button>
			</div>
	     ) : (
		  <div>Pas de votes</div>
	    )}
		</div>
	) : (
		<div className='cmh-cart-closed'>
			<button
				className='cmh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Créer un vote !
			</button>
		</div>
	)
}
export default Cart
