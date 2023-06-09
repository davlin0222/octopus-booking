async function fetchBookings(dateString) {
    try {
        const response = await fetch(`../api/fetch-bookings.php?date=${dateString}`)

        const text = await response.text()
        // console.log(`login  text:`, text)
        const { success, data } = JSON.parse(text)
        // console.log(`fetchBookings  data.userId:`, data.userId)

        if (!success) return

        const bookings = data.bookings.map((booking) => {
            if (booking.userId == data.userId) {
                return { ...booking, isUserBooking: true }
            }

            return booking
        })

        return bookings
    } catch (error) {
        console.error(error)
        return null
    }
}

async function createBookings(selectedBookings, selectedDate, invitations) {
    const data = { bookings: selectedBookings, date: selectedDate, invitations }
    try {
        const response = await fetch('../api/create-bookings.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const text = await response.text()
        console.log(`login  text:`, text)
        const { success, errorMessage } = JSON.parse(text)
        // console.log(`createBookings  errorMessage:`, errorMessage)
        return success
    } catch (error) {
        console.error(error)
        return false
    }
}

async function cancelBookings(selectedBookings, selectedDate) {
    const data = { bookings: selectedBookings, date: selectedDate }
    // console.log(`createBookings  data:`, data)
    try {
        const response = await fetch('../api/cancel-bookings.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const text = await response.text()
        // console.log(`login  text:`, text)
        const { success, errorMessage } = JSON.parse(text)
        // console.log(`createBookings  errorMessage:`, errorMessage)
        return success
    } catch (error) {
        console.error(error)
        return false
    }
}

async function fetchBookingStatistics(startDate, endDate) {
    try {
        const response = await fetch(
            `../api/fetch-booking-statistics.php?start-date=${startDate}&end-date=${endDate}`
        )

        const text = await response.text()
        console.log(`login  text:`, text)
        const { success, data } = JSON.parse(text)
        // console.log(`fetchBookings  data.userId:`, data.userId)

        if (!success) return

        const { bookingStatistics } = data
        return bookingStatistics
    } catch (error) {
        console.error(error)
        return null
    }
}

export { fetchBookings, createBookings, cancelBookings, fetchBookingStatistics }
