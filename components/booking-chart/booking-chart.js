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
    return row
}
