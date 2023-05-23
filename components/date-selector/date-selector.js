import { formatDate } from '../../assets/js/time-utils.js'
import { renderBookingChart } from '../booking-chart/booking-chart.js'

const dateSelectorInput = document.querySelector('#date-selector__input')

const params = new URLSearchParams(window.location.search)
const dateString = params.get('date') || formatDate(new Date()) // get the date string from the 'date' parameter, or use the current date if it's not present
dateSelectorInput.value = dateString

dateSelectorInput.addEventListener('input', dateSelectorInput_onChange)
async function dateSelectorInput_onChange(e) {
    const dateString = e.target.value

    await updateDate(dateString)
}
async function updateDate(dateString) {
    const params = new URLSearchParams(window.location.search) // get the URL query parameters
    params.set('date', dateString) // set the 'date' parameter to the selected date string
    const newUrl = `${window.location.pathname}?${params}` // construct the new URL with the updated query string
    window.history.replaceState(null, null, newUrl) // replace the current URL with the new one

    await renderBookingChart(dateString)
}

document.addEventListener('keydown', async (e) => {
    if (e.key != 'ArrowLeft' && e.key != 'ArrowRight') return
    const changeNumber = getChangeNumber(e.key)

    const dateString = dateSelectorInput.value
    const selectedDate = new Date(dateString)
    selectedDate.setDate(selectedDate.getDate() + changeNumber)
    const newDateString = formatDate(selectedDate)
    dateSelectorInput.value = newDateString

    await updateDate(dateString)
})

function getChangeNumber(key) {
    if (key == 'ArrowLeft') return -1
    if (key == 'ArrowRight') return 1
}
