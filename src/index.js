import 'normalize.css'
import './assets/styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/App'

import Scroll from './employees/SmoothScroll'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Scroll />
			<App />
		</BrowserRouter>
	</Provider>
)
