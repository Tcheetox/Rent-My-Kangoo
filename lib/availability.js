// Fetch, parse, treat and return (within boundaries)
export const getCarAvailability = () =>
	fetch('https://www.2em.ch/location-voiture/geneve/index.php?option=com_autos&view=auto&tmpl=component&format=raw&id=4428&dataType=json', {
		method: 'GET',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
	})
		.then(async res => {
			console.log('Response received from 2EM')
			return manipulateDates(selectDates((await res.json()).eventsParticuliers))
		})
		.catch(err => {
			console.error(err)
			return []
		})

// Maximum one year of dates from current month
const selectDates = d => {
	const date = new Date()
	const thisYear = date.getFullYear()
	const thisMonth = addZero(date.getMonth() + 1)
	const lowerBound = `${thisYear}-${thisMonth}-01`
	const upperBound = `${thisYear + 1}-${thisMonth}-31`
	return d.filter(x => x.date <= upperBound && x.date >= lowerBound && x.state_am !== '1' && x.state_pm !== '1')
}

// Manipulate date to match calendar component inputs
const manipulateDates = d =>
	d.map(x => {
		const splittedDate = x.date.split('-')
		return { year: parseInt(splittedDate[0]), month: parseInt(splittedDate[1]), day: parseInt(splittedDate[2]) }
	})

const addZero = v => (v.toString().length === 1 ? `0${v}` : v)
