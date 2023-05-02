import { getSelectedBookings } from '../booking-chart/get-selected-bookings.js'
import { createBookings } from './bookings.js'

const bookingForm = document.querySelector('#booking-form')
bookingForm.addEventListener('submit', bookingForm_onSubmit)

async function bookingForm_onSubmit(e) {
    e.preventDefault()

    const selectedBookings = getSelectedBookings()
    console.log(`bookingForm_onSubmit  selectedBookings:`, selectedBookings)

    // const form = e.target
    // const email = form.email.value
    // const password = form.password.value

    const success = await createBookings(selectedBookings)
    console.log(`bookingForm_onSubmit  success:`, success)

    // if (success) {
    //     window.reload()
    // }
}
