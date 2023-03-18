const prepareCountry = (value: string | undefined) => {
	
	if (!value) { return 'Армения' }
	if (value === 'United States') { return 'USA'}
	if (value === 'United Kingdom') { return 'UK'}
	if (value === 'Korea, Republic of') { return 'Korea'}
	
	return value
}
export default prepareCountry