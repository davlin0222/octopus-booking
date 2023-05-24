import { fetchBookingStatistics } from '../../assets/js/bookings.js'

const statisticsForm = document.querySelector('#statistics-form')
const startDate = statisticsForm.startDate.value
const endDate = statisticsForm.endDate.value

const bookingStatistics = await fetchBookingStatistics(startDate, endDate)
console.log(`bookingStatistics:`, bookingStatistics)

const totalHoursBooked = document.querySelector('#total-hours-booked')
totalHoursBooked.innerText = bookingStatistics.totalNumberOfHoursBooked
const hoursBookedInTimeSpan = document.querySelector('#hours-booked-in-time-span')
hoursBookedInTimeSpan.innerText = bookingStatistics.totalNumberOfHoursBookedInTimeSpan
