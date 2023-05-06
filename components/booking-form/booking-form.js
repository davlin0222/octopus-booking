import { getSelectedBookings } from '../booking-chart/get-selected-bookings.js'
import { getSelectedDate } from '../date-selector/get-selected-date.js'
import { createBookings } from '../../assets/js/bookings.js'

const bookingForm = document.querySelector('#booking-form')
bookingForm.addEventListener('submit', bookingForm_onSubmit)

async function bookingForm_onSubmit(e) {
    e.preventDefault()
    const selectedBookings = getSelectedBookings()
    const selectedDate = getSelectedDate()
    const success = await createBookings(selectedBookings, selectedDate)

    if (success) {
        window.location.reload()
    }
}
