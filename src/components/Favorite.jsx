const Favorite = () => {
	return (
		<div className='Favorite'>
			<div className='Favorite-img'>
				<img src='/assets/images/costilla.jpg' alt='Favorita' />
			</div>
			<div className='Favorite-title'>
				<h3>RACK DE CORDERO</h3>
			</div>
			<div className='Favorite-price'>$410.00</div>
			<div className='Favorite-description'>
				La salsa de guajillo de piña encabeza esta combinación que lleva
				berenjenas a la parrilla, cebolla roja, espárragos y por
				supuesto, las deliciosas y decadentes costillitas ahumadas de
				cordero.
			</div>
			<div className='Favorite-button'>
				<button>Agregar</button>
			</div>
		</div>
	)
}

export default Favorite
