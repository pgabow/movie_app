import { IStore } from "./types"

export const selectDetail = (state : { detailReducer : IStore}) : IStore['filmInfo'] => {
	return state.detailReducer.filmInfo
} 
