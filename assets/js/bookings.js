async function fetchBookings(dateString) {
    console.log(`fetchBookings  dateString:`, dateString)
    try {
        const response = await fetch(`../api/fetch-bookings.php?date=${dateString}`)

        const text = await response.text()
        console.log(`login  text:`, text)
        const { success, data } = JSON.parse(text)

        if (!success) return

        return data.bookings
    } catch (error) {
        console.error(error)
        return null
    }
}

async function createBookings(selectedBookings, selectedDate) {
    const data = { bookings: selectedBookings, date: selectedDate }
    console.log(`createBookings  data:`, data)
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

export { fetchBookings, createBookings }
