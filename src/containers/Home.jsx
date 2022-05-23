import Card from '../components/Card'
import ShowMenu from '../components/ShowMenu'
import '../styles/containers/Home.scss'

const Home = () => {
	return (
		<Card footer={false} home={true}>
			<div className='Home'>
				<div className='Home-title'>
					<h1>Angy&rsquo;s</h1>
					<span>Relájate, llegaste a casa</span>
				</div>
				<ShowMenu />
			</div>
		</Card>
	)
}

export default Home
