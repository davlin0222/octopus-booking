function getSelectedBookings() {
    const selectedBookingCells = Array.from(
        document.querySelectorAll('.booking-chart__booking-cell--selected')
    )

    const selectedBookings = selectedBookingCells.map((bookingCell) => {
        const hour = bookingCell.dataset.hour
        const roomId = bookingCell.dataset.roomId

        return { hour, roomId }
    })
    return selectedBookings
}

export { getSelectedBookings }
