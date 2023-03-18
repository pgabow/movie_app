import { AnyAction } from "redux"

import { IStore } from "./types"

const initialState = {
	filmInfo: 
	{	id: undefined,
		ended: undefined,
		premiered: undefined,
		genres: [''],
		image: undefined,
		name: undefined,
		rating: undefined,
		summary: undefined,
		network: undefined,
	},
}

const detailReducer = (state : IStore = initialState, action : AnyAction) => {
	switch (action.type) {
		case 'show/setDetail' :
			return {...state, filmInfo: {...action.payload}}
		default:
			return state
	}
}

export default detailReducer;

