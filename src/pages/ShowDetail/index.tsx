import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import routeMain from './routes'
import ShowDetailOut from "components/ShowDetailOut"
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadDetail } from 'store/detail/actions'
import { selectDetail } from 'store/detail/selectors'

import { ID } from 'types/ID'

import './style.scss'

const ShowDetail = () => {
	const { id } = useParams<ID>()

	const dispatchDetail = useDispatch();
	const showById = useSelector(selectDetail);

	useEffect(() => {
		dispatchDetail(loadDetail('/' + id))
	}, [id, dispatchDetail])
// console.log(id)
	return (
		<section className="container">
			{/* {showById.length > 0 ? (
				<ShowDetailOut show={showById[0]} /> */}
				{showById ? (
					<ShowDetailOut show={showById} />
				) : (
				<>Щас все будет</>
			)}
		</section>
	)
}

export { routeMain }
export default ShowDetail
