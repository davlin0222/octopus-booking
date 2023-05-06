import { getSelectedBookings } from '../booking-chart/get-selected-bookings.js'
import { getSelectedDate } from '../date-selector/get-selected-date.js'
import { createBookings } from '../../assets/js/bookings.js'

const bookButton = document.querySelector('#book-button')
const cancelBookingsButton = document.querySelector('#cancel-bookings-button')
bookButton.addEventListener('click', bookButton_onClick)

async function bookButton_onClick(e) {
    e.preventDefault()
    const selectedBookings = getSelectedBookings()
    const selectedDate = getSelectedDate()
    const success = await createBookings(selectedBookings, selectedDate)

    if (success) {
        window.location.reload()
    }
}
