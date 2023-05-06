import { formatDate } from '../../assets/js/time-utils.js'
import { renderBookingChart } from '../booking-chart/booking-chart.js'

const dateSelectorInput = document.querySelector('#date-selector__input')

const formattedDate = formatDate(new Date())
console.log(`formattedDate:`, formattedDate)
dateSelectorInput.value = formattedDate

dateSelectorInput.addEventListener('input', dateSelectorInput_onChange)
function dateSelectorInput_onChange(e) {
    console.log(`dateSelectorInput_onChange  e:`, e)
    renderBookingChart()
}
