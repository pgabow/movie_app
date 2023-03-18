import React, { useState } from 'react'

import routeMain from './routes'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadShowSearch } from 'store/searchShow/actions'
import { selectShowSearch } from 'store/searchShow/selectors'

import ShowMain from 'components/ShowMain'

import './style.scss'

const SearchShowName = () => {
	const [valueInput, setValueInput] = useState('')

	const dispatch = useDispatch();
	const showNew = useSelector(selectShowSearch);

	const getSubmit = (e: any) => {
		e.preventDefault()
		if (valueInput) {
			dispatch(loadShowSearch(valueInput))
			setValueInput('')
		}
	}

	const getClear = () => {
		// взял на вооружение твой совет, что диспатч можно применять где угодно ) Спасибо большое )
		dispatch(loadShowSearch(''))
	}

	return (
		<section className="main__page">
			<div className="container">
				<div className="row">
					<div className="search-title">Поиск по имени шоу</div>
						<div className="search-form__wrapp">
							<form action="" onSubmit={(e) => getSubmit(e)}>
								<input
									className="show-input"
									placeholder="буковки все сюда"
									type="text"
									name="newShow"
									id="newShow"
									onChange={(e) => setValueInput(e.target.value)}
									value={valueInput}
								/>
								&nbsp;&nbsp;&nbsp;
								<button
									type="submit"
									className="icon-search icon-style"
									title="смело можно тыкать!"
								></button>
							</form>
						</div>
						<div className="clear-btn">
							<button onClick={() => getClear()} className="search-btn__clear" title="развидеть все это">
								Очистить поиск
							</button>
						</div>

				</div>
			</div>
			<div className="out-wrapp">

				{showNew.length > 0 ? (
					<ShowMain list={showNew.slice(0, 8)} />
				) : (
					<p className='oblom-mess'><span className="icon-warning1 warning"></span>&nbsp;&nbsp;&nbsp;Результатов пока нет&nbsp;&nbsp;&nbsp;<span className="icon-warning1 warning"></span></p>
				)}
			</div>

		</section>
	)
}

export { routeMain };
export default SearchShowName
