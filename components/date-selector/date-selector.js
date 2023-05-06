import { formatDate } from '../../assets/js/time-utils.js'
import { renderBookingChart } from '../booking-chart/booking-chart.js'

const dateSelectorInput = document.querySelector('#date-selector__input')

const formattedDate = formatDate(new Date())
dateSelectorInput.value = formattedDate

dateSelectorInput.addEventListener('input', dateSelectorInput_onChange)
async function dateSelectorInput_onChange(e) {
    const dateString = e.target.value

    const params = new URLSearchParams(window.location.search) // get the URL query parameters
    params.set('date', dateString) // set the 'date' parameter to the selected date string
    const newUrl = `${window.location.pathname}?${params}` // construct the new URL with the updated query string
    window.history.replaceState(null, null, newUrl) // replace the current URL with the new one

    await renderBookingChart(dateString)
}
