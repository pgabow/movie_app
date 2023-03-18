import React from "react";

import { NavLink } from 'react-router-dom'
import { routeMain as routeShowDetail } from 'pages/ShowDetail'

import { IShowDetail } from "types/IShowDetail";
import BlancShow from 'assets/img/blanc_category.png'

import './style.scss'

interface IShowItemParams {
	item: IShowDetail;
}

const ShowItem: React.FC<IShowItemParams> = ({ item }) => {
	const showImage = (imgUrl : string | undefined) => {
		return (imgUrl) 	? <img className="category-item__img" src={imgUrl} alt="show_images" />
								: <img className="category-item__img" src={BlancShow} alt="show_images" />
	} 

	return (
		<NavLink className="col-6 category-item" to={routeShowDetail(item.id?.toString())}>
			<div>
				{showImage(item.image?.medium)}
			</div>
			<div>
				<div className="category-item__title">{item.name}</div>
				<div className="category-item__genres">{item.genres?.join(', ')}</div>
			</div>
		</NavLink>
	)
}

export default ShowItem