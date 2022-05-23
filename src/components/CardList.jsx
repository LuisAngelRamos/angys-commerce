const CardList = () => {
	return (
		<div className='CardList'>
			<div className='CardList-title'>
				{'name'.split('').map((letter, index) => (
					<span key={index}>{letter}</span>
				))}
			</div>
			<div className='CardList-img'>
				<img src='/assets/images/pizza-vegana.jpg' alt='Favorita' />
			</div>
		</div>
	)
}

export default CardList
