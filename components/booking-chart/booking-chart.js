import { convertHourToClockTime } from './time-utils.js'
import { fetchRooms } from './rooms.js'
// import { fetchBookings } from './bookings.js'

const rooms = await fetchRooms()

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

    for (let hour = firstHour; hour <= lastHour; hour++) {
        const row = createRow(hour, rooms)
        tableBody.appendChild(row)
    }
    return tableBody
}

function createRow(hour, rooms) {
    const row = document.createElement('tr')
    row.classList.add('booking-chart__row')
    row.appendChild(createTimeHeaderCell(hour))
    rooms.forEach((room) => {
        const bookingCell = createBookingCell(hour, room)
        row.appendChild(bookingCell)
    })
    return row
}

function createTimeHeaderCell(rowHour) {
    const timeHeaderCell = document.createElement('td')
    timeHeaderCell.classList.add('booking-chart__row-header-cell')
    const formattedHour = convertHourToClockTime(rowHour)
    const formattedNextHour = convertHourToClockTime(rowHour + 1)
    timeHeaderCell.innerText = formattedHour
    timeHeaderCell.title = `${formattedHour}-${formattedNextHour}`
    return timeHeaderCell
}

function createBookingCell(hour, room) {
    const bookingCell = document.createElement('td')
    bookingCell.classList.add('booking-chart__booking-cell')
    bookingCell.classList.add('booking-chart__booking-cell--available')

    bookingCell.dataset.roomId = room.id
    bookingCell.dataset.hour = hour

    return bookingCell
}
