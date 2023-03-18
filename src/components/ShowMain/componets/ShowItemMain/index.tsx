import React from "react";
import BlancShow from 'assets/img/blanc_show.png'

import { NavLink } from 'react-router-dom'
import { routeMain as routeShowDetail } from 'pages/ShowDetail'

import prepareDate from "utils/prepareDate";
import prepareCountry from "utils/prepareCountry"

import { IShowDetail } from "types/IShowDetail";

import './style.scss'

interface IShowItemParams {
	item: IShowDetail;
}

const ShowItemMain: React.FC<IShowItemParams> = ({ item }) => {

	const showImage = (imgUrl : string | undefined) => {
		return (imgUrl) 	? <img className="show-item__img" src={imgUrl} alt="show_images" />
								: <img className="show-item__img" src={BlancShow} alt="show_images" />
	} 
	const yearShow = prepareDate(item.premiered);
	const countryShow = prepareCountry(item.network?.country.name);

	return (
		<NavLink className="col-3 show-item" to={routeShowDetail(item.id?.toString())}>
			<div className="show-item__wrapp">
				{showImage(item.image?.medium)}
				<div className="show-item__info">
					<div className="show-item__info-title">
						{item.name}
					</div>
					<div className="show-item__info-subtitle">
						{yearShow}&nbsp;({countryShow})<br />
						{item.genres?.join(', ')}
					</div>
				</div>		
			</div>
		</NavLink>
	)
}

export default ShowItemMain