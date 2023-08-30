const timeConvert = h => {
  const trunc = Math.trunc(h)
  const hh = trunc.toString().length == 2 ? trunc : `0${trunc}`
  return h % 1 > 0 ? `${hh}:30` : `${hh}:00`
}

const getPriceEstimate = async (req, res) => res.json({ price: 666 })
// fetch('https://www.2em.ch/location-voiture/geneve/index.php?option=com_autos&controller=auto&task=calculPrices', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams({
//         date_start: req.body.startDate,
//         date_end: req.body.endDate,
//         state_am: timeConvert(req.body.time[0]),
//         state_pm: timeConvert(req.body.time[1]),
//         kilometrage: req.body.km,
//         id_auto: 4428,
//     }),
// })
//     .then(response => response.json())
//     .then(result => res.json({ price: result.order_total ?? null }))
//     .catch(err => {
//         console.error(err)
//         res.json({ price: null })
//     })

export default getPriceEstimate
