function getSelectedBookings() {
    const selectedBookingCells = Array.from(
        document.querySelectorAll('.booking-chart__booking-cell._selected')
    )

    const selectedBookings = selectedBookingCells.map((bookingCell) => {
        const roomId = bookingCell.dataset.roomId
        const hour = bookingCell.dataset.hour

        return { roomId, hour }
    })
    return selectedBookings
}

export { getSelectedBookings }
