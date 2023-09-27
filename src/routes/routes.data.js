import Product from '../components/products/Product'
import Home from '../screens/Home/Home'
import ProductPage from '../screens/ProductPage/ProductPage'

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/products',
		component: ProductPage,
	},
	{
		path: '/products/:id',
		component: Product,
	},
	// {
	// 	path: '/breadcrumbs',
	// 	component: Breadcrumbs,
	// },
]
