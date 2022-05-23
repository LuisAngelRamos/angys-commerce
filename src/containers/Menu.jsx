import Card from '../components/Card'
import Favorite from '../components/Favorite'
import MenuList from '../components/MenuList'

import '../styles/containers/Menu.scss'

const Menu = () => {
	return (
		<div className='Menu'>
			<Card>
				<Favorite />
			</Card>
			<Card>
				<MenuList />
			</Card>
		</div>
	)
}

export default Menu
