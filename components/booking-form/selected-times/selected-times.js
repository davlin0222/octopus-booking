import { clockFormatHour } from '../../../assets/js/time-utils.js'

export function updateSelectedTimes() {
    const selectedCells = Array.from(
        document.querySelectorAll(
            '.booking-chart__booking-cell._selected, .booking-chart__booking-cell._selected-user-booking'
        )
    )

    const selectedTimes = selectedCells.map((aSelectedCell) => ({
        hour: aSelectedCell.dataset.hour,
        roomId: aSelectedCell.dataset.roomId,
    }))

    const aggregatedSelectedTimes = aggregateTimes(selectedTimes)
    // console.log(`updateSelectedTimes  aggregatedSelectedTimes:`, aggregatedSelectedTimes)
    renderSelectedTimesSummery(aggregatedSelectedTimes)
}

function aggregateTimes(selectedTimes) {
    // ? Are the hours always sorted as well?
    const sortedSelectedTimes = selectedTimes.sort((a, b) => a.roomId - b.roomId)

    const aggregatedBookings = sortedSelectedTimes.reduce(
        (aggregatedBookings, currentItem, index, array) => {
            const { hour: currentHour, roomId: currentRoomId } = currentItem
            const { hour: lastHour, roomId: lastRoomId } = array[index - 1] || {}

            if (index === 0 || currentRoomId !== lastRoomId) {
                aggregatedBookings.push({
                    startHour: currentHour,
                    endHour: currentHour,
                    roomId: currentRoomId,
                })
                return aggregatedBookings
            }

            if (currentHour - 1 == lastHour) {
                const lastBooking = aggregatedBookings[aggregatedBookings.length - 1]
                lastBooking.endHour = currentHour
            } else {
                aggregatedBookings.push({
                    startHour: currentHour,
                    endHour: currentHour,
                    roomId: currentRoomId,
                })
            }

            return aggregatedBookings
        },
        []
    )

    return aggregatedBookings
}

function renderSelectedTimesSummery(aggregatedSelectedTimes) {
    const selectedTimesElement = document.querySelector('#selectedItems')
    selectedTimesElement.innerHTML = ''
    aggregatedSelectedTimes.forEach((booking) => {
        const roomId = booking.roomId
        const startHour = clockFormatHour(booking.startHour)
        const endHour = clockFormatHour(parseInt(booking.endHour) + 1)

        const paragraph = document.createElement('p')
        paragraph.classList.add('selected-times__item')
        paragraph.innerHTML = `Room ${roomId}: <br>${startHour}-${endHour}`

        selectedTimesElement.appendChild(paragraph)
    })
}
