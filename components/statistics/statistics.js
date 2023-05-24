import { fetchBookingStatistics } from '../../assets/js/bookings.js'
const bookingStatistics = await fetchBookingStatistics()
console.log(`bookingStatistics:`, bookingStatistics)
