import React from 'react'

import Info from '../../components/info/Info'
import Layout from '../../components/layout/Layout'
import PromoSlider from '../../components/promoslider/PromoSlider'

const Home = () => {
	return (
		<Layout>
			<PromoSlider />
			<Info />
		</Layout>
	)
}

export default Home
