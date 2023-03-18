import { IShowAverage } from "./IShowAverage";
import { IShowImage } from "./IShowImage";
import { IShowNetwork } from "./IShowNetwork";
// добавил просто так, для себя лично
// import { IShowLinks } from "./IShowLinks";
// import { IShowSchedule } from "./IShowSchedule"
// import { IShowExternals } from "./IShowExternals"

export interface IShowDetail {
	id?: number;
	ended?: string;
	premiered?: string;
	genres: string[];
	image?: IShowImage;
	name?: string;
	rating?: IShowAverage;
	summary?:  string;
	network?: IShowNetwork;
//	необязательные данные, отсавил себе просто поиграться потом
	// averageRuntaim?: number;
	// dvdCountry?: null;
	// externals?: IShowExternals;
	// language?: string;
	// officialSite?: string;
	// runtime?: number;
	// schedule: IShowSchedule;
	// status?: string;
	// type?: string;
	// updated?: number;
	// url?: string;
	// webChannel?: null;
	// weight?: number;
	// _links?: IShowLinks;
}
