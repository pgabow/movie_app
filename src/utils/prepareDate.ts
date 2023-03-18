const prepareDate = (value: string | undefined) => {
	return value ? value.slice(0, 4) : '1812'
}
export default prepareDate