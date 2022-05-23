import { Link } from 'react-router-dom'

const ShowMenu = () => {
	return (
		<div className='ShowMenu'>
			<Link to='/menu'>MENU</Link>
			<i className='fa-solid fa-angles-down fa-xl'></i>
		</div>
	)
}

export default ShowMenu
