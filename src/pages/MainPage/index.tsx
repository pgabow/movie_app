import React, { useEffect } from 'react'

import routeMain from './routes'
import routeWayUp from './routesWayUp'
// redux
import { useDispatch, useSelector } from 'react-redux'

import { loadShow } from 'store/show/actions'
import { selectShow } from 'store/show/selectors'

import ShowMain from 'components/ShowMain'
import './style.scss'

const MainPage = () => {
	const dispatch = useDispatch();
	const showGerl = useSelector(selectShow);

	useEffect(() => {
		dispatch(loadShow());
	}, [dispatch])

	return (
		<section className="main__page">
			<div className="container show-wrapp">
				<div className="row">
					<div className="main-title">MOVIESinfo</div>
				</div>
			</div>

			<ShowMain list={showGerl.slice(0, 8)} />
		</section>
	)
}

export { routeMain };
export { routeWayUp }
export default MainPage
