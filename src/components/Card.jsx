import Layout from './Layout'
import propTypes from 'prop-types'
import '../styles/components/Card.scss'

const Card = ({ children, footer, home }) => {
	return (
		<section className={home ? 'Card Card__background' : 'Card'}>
			<Layout footer={footer}>{children}</Layout>
		</section>
	)
}

export default Card

Card.propTypes = {
	children: propTypes.func,
	footer: propTypes.bool,
	home: propTypes.bool,
}
