import   {catList}  from '../datas/catList'
import CatItem from './CatItem'
import '../styles/VotingList.css'



function VotingList({cart,updateCart}) {
   
    function addToCart(name) {
        const currentCatSaved = cart.find((cat) => cat.name === name)
        if (currentCatSaved) {
            const cartFilteredCurrentCat = cart.filter(
                (cat) => cat.name !== name
            )
            updateCart([
                ...cartFilteredCurrentCat,
                { name, amount: currentCatSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, amount: 1 }])
        }
    }

	return (
		<div className='cmh-voting-list'>
			<ul className='cmh-cat-list'>
				{catList.map(({ id,cover, name}) => (
                    <div key={id}>
                        <CatItem
						key={id}
						cover={cover}
                        name={name}
					    />
                     <button onClick={() => addToCart(name)}>Voter</button>
                    </div>
					
				))}   
			</ul>
		</div>
	)
}

export default VotingList