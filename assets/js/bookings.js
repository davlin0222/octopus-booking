async function fetchBookings() {
    try {
        const response = await fetch('../api/fetch-bookings.php')

        const { success, data } = await response.json()
        if (!success) return

        return data.rooms
    } catch (error) {
        console.error(error)
        return null
    }
}

async function createBookings(selectedBookings) {
    console.log(JSON.stringify({ bookings: selectedBookings }))
    console.log(`createBookings  createBookings:`)
    try {
        const response = await fetch('../api/create-bookings.php', {
            method: 'POST',
            body: JSON.stringify({ bookings: selectedBookings }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const text = await response.text()
        console.log(`login  text:`, text)
        const { success, errorMessage } = JSON.parse(text)
        console.log(`createBookings  errorMessage:`, errorMessage)
        return success
    } catch (error) {
        console.error(error)
        return false
    }
}

export { fetchBookings, createBookings }
