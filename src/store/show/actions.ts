import { Dispatch } from "redux"
import getShow from "services/getShow"

import { IStore } from "./types"

export const setShowAction = (list : IStore['list']) => {
	return {
		type: 'show/setShow',
		payload: list,
	}
}

export const loadShow = () => async (dispatch : Dispatch) => {
	try {
		const response = await getShow('girls')
		dispatch(setShowAction(response.data))
	} catch(e) {
		console.log('Error: ', e)
	}
}
