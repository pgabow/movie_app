const prepareSummary = (value: string | undefined) => {
	return (value) ? value.replace( /(<([^>]+)>)/ig,'') : 'Описание пока не подвезли. Все будет. Волноваться не надо'
	// return value.replace(/<\/?[a-zA-Z]+>/gi,'');
	// return value.replace(/<[a-z]{1}>.*?<\/[a-z]{1}>/gi, "");
}
export default prepareSummary