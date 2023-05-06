import { getSelectedBookings } from '../booking-chart/get-selected-bookings.js'
import { createBookings } from '../../assets/js/bookings.js'

const bookingForm = document.querySelector('#booking-form')
bookingForm.addEventListener('submit', bookingForm_onSubmit)

async function bookingForm_onSubmit(e) {
    e.preventDefault()
    const selectedBookings = getSelectedBookings()
    const success = await createBookings(selectedBookings)

    if (success) {
        window.location.reload()
    }
}
