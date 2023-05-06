import { formatDate } from '../../assets/js/time-utils.js'

const dateSelectorInput = document.querySelector('#date-selector__input')

const formattedDate = formatDate(new Date())
console.log(`formattedDate:`, formattedDate)
dateSelectorInput.value = formattedDate
