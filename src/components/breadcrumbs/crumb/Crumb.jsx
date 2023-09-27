import cn from 'classnames'
import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Crumb.module.css'

const Crumb = ({ className, id, path, title, url }) => {
	const navigate = useNavigate()
	const match = useRouteMatch()
	const { state } = useLocation()

	const renderTitle = () => {
		if (title === 'Home') {
			return 'Иконка'
		} else {
			return title
		}
	}

	return (
		<span className={cn(styles.crumb, className)}>
			{match && match.isExact ? (
				renderTitle()
			) : (
				<>
					<div onClick={() => {}}>{renderTitle()}</div>
					<span>/</span>
				</>
			)}
		</span>
	)
}

export default Crumb
