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

        const { success, data } = await response.json()
        console.log(`createBookings  data:`, data)
        return success
    } catch (error) {
        console.error(error)
        return false
    }
}
export { createBookings }
