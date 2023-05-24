import { fetchBookingStatistics } from '../../assets/js/bookings.js'
const bookingStatistics = await fetchBookingStatistics()
console.log(`bookingStatistics:`, bookingStatistics)

const totalHoursBooked = document.querySelector('#total-hours-booked')
totalHoursBooked.innerText = bookingStatistics.totalNumberOfHoursBooked
