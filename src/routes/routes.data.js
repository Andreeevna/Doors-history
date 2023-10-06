import Product from '../components/products/Product'
import Home from '../screens/Home/Home'
import ProductPage from '../screens/ProductPage/ProductPage'

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/products/:name',
		component: ProductPage,
	},
	{
		path: '/products/:name/:id',
		component: Product,
	},
]
