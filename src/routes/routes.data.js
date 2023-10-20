import Products from '../components/products/Product'
import Catalog from '../screens/Catalog/Catalog'
import Home from '../screens/Home/Home'
import LocationPage from '../screens/LocationPage/LocationPage'
import ProductPage from '../screens/ProductPage/ProductPage'
import StocksPage from '../screens/StocksPage/StocksPage'

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/products/:name?',
		component: ProductPage,
	},
	{
		path: '/products/:name/:id',
		component: Products,
	},
	{
		path: '/catalog',
		component: Catalog,
	},
	{
		path: '/stocks',
		component: StocksPage,
	},
	{
		path: '/location',
		component: LocationPage,
	},
]
