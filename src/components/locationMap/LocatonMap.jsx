import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'

const LocationMap = () => {
	return (
		<YMaps>
			<div>
				<Map
					defaultState={{
						center: [52.971629, 36.056318],
						zoom: 12,
					}}
				>
					<Placemark defaultGeometry={[52.971629, 36.056318]} />
				</Map>
			</div>
		</YMaps>
	)
}

export default LocationMap
