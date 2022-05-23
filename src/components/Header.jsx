import '../styles/components/Header.scss'
import propTypes from 'prop-types'

const Header = ({ title }) => {
	return (
		<div className='Header'>
			<div className='Header-menu'>
				<i className='fa-solid fa-bars fa-xl'></i>
			</div>
			{title && <span>{title}</span>}
			<div className='Header-menu-rigth'>
				<div className='Header-menu-element'>
					<i className='fa-solid fa-magnifying-glass fa-xl'></i>
				</div>
				<div className='Header-menu-element'>
					<i className='fa-solid fa-cart-shopping fa-xl'></i>
				</div>
			</div>
		</div>
	)
}

export default Header
Header.propTypes = {
	title: propTypes.string,
}
