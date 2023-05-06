import { clockFormatHour, formatHourDuration } from './time-utils.js'
import { fetchRooms } from './rooms.js'
// import { fetchBookings } from './bookings.js'

const state = { mouseDown: false }
document.addEventListener('mouseup', () => {
    state.mouseDown = false
})

const rooms = await fetchRooms()
// const bookings = await fetchBookings()

const tableHeader = createTableHeader(rooms)
const tableBody = createTableBody(rooms, 6, 22)

const bookingChart = document.querySelector('#booking-chart')
bookingChart.appendChild(tableHeader)
bookingChart.appendChild(tableBody)

function createTableHeader(rooms) {
    const timeHeaderCell = document.createElement('th')
    timeHeaderCell.classList.add('booking-chart__header-cell')

    const headerCells = rooms.map((room) => {
        const headerCell = document.createElement('th')
        headerCell.classList.add('booking-chart__header-cell')
        headerCell.innerText = room.id
        return headerCell
    })

    const tableHeader = document.createElement('thead')
    tableHeader.appendChild(timeHeaderCell)
    headerCells.forEach((headerCell) => tableHeader.appendChild(headerCell))
    return tableHeader
}

function createTableBody(rooms, firstHour, lastHour) {
    const tableBody = document.createElement('tbody')

    for (let rowHour = firstHour; rowHour <= lastHour; rowHour++) {
        const row = createRow(rowHour, rooms)
        tableBody.appendChild(row)
    }
    return tableBody
}

function createRow(rowHour, rooms) {
    const row = document.createElement('tr')
    row.classList.add('booking-chart__row')
    row.appendChild(createTimeHeaderCell(rowHour))
    rooms.forEach((room) => {
        const bookingCell = createBookingCell(rowHour, room)
        row.appendChild(bookingCell)
    })
    return row
}

function createTimeHeaderCell(rowHour) {
    const timeHeaderCell = document.createElement('td')
    timeHeaderCell.classList.add('booking-chart__row-header-cell')
    const formattedHour = clockFormatHour(rowHour)
    const formattedHourDuration = formatHourDuration(rowHour)
    timeHeaderCell.innerText = formattedHour
    timeHeaderCell.title = formattedHourDuration
    return timeHeaderCell
}

function createBookingCell(hour, room) {
    const bookingCell = document.createElement('td')
    bookingCell.classList.add('booking-chart__booking-cell')
    bookingCell.classList.add('booking-chart__booking-cell--available')

    bookingCell.dataset.roomId = room.id
    bookingCell.dataset.hour = hour

    const formattedClock = formatHourDuration(hour)
    bookingCell.title = `Room ${room.id}\n${formattedClock}`

    bookingCell.addEventListener('mousedown', bookingCell_onMouseDown)
    bookingCell.addEventListener('mouseover', bookingCell_onMouseOver)

    return bookingCell
}

function bookingCell_onMouseDown(e) {
    state.mouseDown = true
    toggleCellSelect(e.target)
}
function bookingCell_onMouseOver(e) {
    if (state.mouseDown) toggleCellSelect(e.target)
}

function toggleCellSelect(bookingCell) {
    bookingCell.classList.toggle('booking-chart__booking-cell--available')
    bookingCell.classList.toggle('booking-chart__booking-cell--selected')
}
