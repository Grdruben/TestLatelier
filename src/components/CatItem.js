
import '../styles/CatItem.css'

function CatItem({ cover,name}) {
	return (
		<li className='cmh-cat-item' >
			<img className='cmh-cat-item-cover' src={cover} alt={`${name} cover`} />
            <br/>
            {name}   
		</li>
	)
}
export default CatItem