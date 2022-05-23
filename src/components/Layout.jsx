import Header from './Header'
import Footer from './Footer'
import propTypes from 'prop-types'

const Layout = ({ children, footer }) => {
	return (
		<>
			<Header />
			{children}
			{footer && <Footer />}
		</>
	)
}

export default Layout

Layout.propTypes = {
	children: propTypes.func,
	footer: propTypes.bool,
}
