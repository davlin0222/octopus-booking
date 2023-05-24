import { fetchBookingStatistics } from '../../assets/js/bookings.js'

const statisticsForm = document.querySelector('#statistics-form')

statisticsForm.startDate.addEventListener('change', updateStatistics)
statisticsForm.endDate.addEventListener('change', updateStatistics)

await updateStatistics()

async function updateStatistics() {
    const startDate = statisticsForm.startDate.value
    const endDate = statisticsForm.endDate.value

    const bookingStatistics = await fetchBookingStatistics(startDate, endDate)

    const totalHoursBooked = document.querySelector('#total-hours-booked')
    totalHoursBooked.innerText = bookingStatistics.totalNumberOfHoursBooked
    const hoursBookedInTimeSpan = document.querySelector('#hours-booked-in-time-span')
    hoursBookedInTimeSpan.innerText = bookingStatistics.totalNumberOfHoursBookedInTimeSpan
}
