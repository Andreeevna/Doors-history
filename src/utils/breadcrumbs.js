// state -- history state of app (массив хлебных крошек)

// url -- url of current breadcrumb (Url старницы,содержащийся в state на которую осуществляется переход)
// state: [{id, path, title, url}]

export const removeReminingCrumbs = (state, url) => {
	const index = state.findIndex(({ url: route }) => route === url)

	return state.slice(0, index)
}
