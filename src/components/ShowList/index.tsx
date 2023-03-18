import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import ShowItem from "./components/ShowItem";
import { Dropdown } from 'react-bootstrap'

import { IShowDetail } from "types/IShowDetail";
import './style.scss'

interface IShowListParams {
	list: IShowDetail[];
}
// тестирование типизации
// Элемент массива (строка или массив строк)
type ArrayElement = string[] | undefined;
// Исходный массив
type TestArray = ArrayElement[] | undefined;

const ShowList: React.FC<IShowListParams> = ({ list }) => {
	
	const [genres, setGenres] = useLocalStorage("genres", 'Drama');

	const tempGenres: TestArray = list.map((show: IShowDetail) => show.genres)
	// Удаляю дубликаты
	let arrGenres = tempGenres.flat(Infinity).filter((item, index) => tempGenres.flat(Infinity).indexOf(item) === index);
	
	console.log(list)

	const showFilter = list.filter((show: IShowDetail) => 
		((show.genres[0] === genres) || (show.genres[1] === genres) || 
		(show.genres[2] === genres)) 
		)
		
	const showOutFilter = showFilter.map((show: IShowDetail) => <ShowItem key={show.id} item={show} />)

	return (
		<div className="container">
			<div className="row">
				<div className="category-wrapp">
					<div className="category-title">Выбранная категория:&nbsp;&nbsp;</div>
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic" className="btn-castom">
							{genres.toLowerCase()}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{arrGenres.sort().map((item, idx) =>
								<Dropdown.Item key={idx} onClick={() => setGenres(item)}>{item}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
				</div>
				{showOutFilter}
			</div>
		</div>
	)
}

export default ShowList