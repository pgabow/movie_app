import { Dispatch } from "redux"
import getShow from "services/getShow"

import { IStore } from "./types"

export const setShowSearchAction = (list : IStore['list']) => {
	return {
		type: 'show/setShowSearch',
		payload: list,
	}
}

export const loadShowSearch = (value: string | undefined) => async (dispatch : Dispatch) => {
	try {
		const response = await getShow(value)
		dispatch(setShowSearchAction(response.data))

	} catch(e) {
		console.log('Error: ', e)
	}
}
