import React from "react";

import { IShowDetail } from "types/IShowDetail";

import prepareDate from "utils/prepareDate";
import prepareCountry from "utils/prepareCountry"
import prepareSummary from 'utils/prepareSummary'
import prepareRating from "utils/prepareRating"
import Stars from "assets/img/star.png"
import BlancShow from 'assets/img/blanc_showDetail.png'

interface IShowListParams {
	show: IShowDetail;
}
const ShowDetailOut: React.FC<IShowListParams> = ({ show }) => {

	const showImage = (imgUrl : string | undefined) => {
		return (imgUrl) ? <img className="detail-img" src={imgUrl} alt="show_images" /> 
							: <img className="detail-img" src={BlancShow} alt="show_images" />
	} 
	return (
		<div className="row show-detail__wrapp-row">
		<div className="col-1"></div>
		<div className="col-10 show-detail__wrapp">
			<div className="show-detail__img">
				{showImage(show.image?.original)}
			</div>
			<div className="">
				<div className="show-detail__title">
					<div><span>{show.name}</span></div>
					<div className="show-detail__title-rating">
						<img className="show-detail__title-stars"
							src={Stars}
							alt="rating"
						/>
						{prepareRating(show.rating?.average)}/10
					</div>
				</div>
				<div className="show-detail__info">
					<div className="show-detail__info-title">
						<p>Год выхода:</p>
						<p>Страна:</p>
						<p>Жанр:</p>
						<p>Описание:</p>
					</div>
					<div className="show-detail__info-summary">
						<p>{prepareDate(show.premiered)}</p>
						<p>{prepareCountry(show.network?.country.name)}</p>
						{show.genres ? (<p>{show.genres?.join(', ')}</p>) : (<p>n\a</p>)}			
						<p>{prepareSummary(show.summary)}</p>
					</div>
				</div>
			</div>
		</div>
		<div className="col-1"></div>
	</div>
	)
}
export default ShowDetailOut