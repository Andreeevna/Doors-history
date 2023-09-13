import React from 'react'

import Collection from '../../components/collection/Collection'
import Сommunication from '../../components/communication/Сommunication'
import Info from '../../components/info/Info'
import Layout from '../../components/layout/Layout'
import PromoSlider from '../../components/promoslider/PromoSlider'

const Home = () => {
	return (
		<Layout>
			<PromoSlider />
			<Info />
			<Collection />
			<Сommunication />
		</Layout>
	)
}

export default Home
