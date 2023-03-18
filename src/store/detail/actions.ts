import { Dispatch } from "redux"
import getSearch from "services/getSearch"

import { IStore } from "./types"

// export const setDetail = (list : IStore['list']) => {
export const setDetail = (filmInfo : IStore) => {
	return {
		type: 'show/setDetail',
		payload: filmInfo,
	}
}

export const loadDetail = (value: string | undefined) => async (dispatch : Dispatch) => {
	try {
		// здесь может костыль написал с временным массивом, но идей больше не было
		// let tempArr = []
		// let tempArr : IStore
		const response = await getSearch(value)
		// tempArr[0] = response.data
		// console.log(response.data)
		// tempArr = response.data
		dispatch(setDetail(response.data))
	} catch(e) {
		console.log('Error: ', e)
	}
}
