import {
    clockFormatHour,
    formatHourDuration,
    formatDate,
} from '../../assets/js/time-utils.js'
import { fetchRooms } from './rooms.js'
import { fetchBookings } from '../../assets/js/bookings.js'

const state = { mouseDown: false }
document.addEventListener('mouseup', () => {
    state.mouseDown = false
})

const rooms = await fetchRooms()

const params = new URLSearchParams(window.location.search)
const dateString = params.get('date') || formatDate(new Date()) // get the date string from the 'date' parameter, or use the current date if it's not present
await renderBookingChart(dateString)

export async function renderBookingChart(dateString) {
    const bookings = await fetchBookings(dateString)
    const tableHeader = createTableHeader(rooms)
    const tableBody = createTableBody({ rooms, firstHour: 6, lastHour: 22, bookings })

    const bookingChart = document.querySelector('#booking-chart')
    bookingChart.innerHTML = ''
    bookingChart.appendChild(tableHeader)
    bookingChart.appendChild(tableBody)
}

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

function createTableBody({ rooms, firstHour, lastHour, bookings }) {
    const tableBody = document.createElement('tbody')

    for (let rowHour = firstHour; rowHour <= lastHour; rowHour++) {
        const row = createRow(rowHour, rooms, bookings)
        tableBody.appendChild(row)
    }
    return tableBody
}

function createRow(rowHour, rooms, bookings) {
    const bookingsOnThisRow = bookings.filter((booking) => booking.hour == rowHour)

    const row = document.createElement('tr')
    row.classList.add('booking-chart__row')
    row.appendChild(createTimeHeaderCell(rowHour))
    rooms.forEach((room) => {
        const bookingCell = createBookingCell(rowHour, room, bookingsOnThisRow)
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

function createBookingCell(hour, room, bookingsOnThisRow) {
    const bookingCell = document.createElement('td')
    bookingCell.classList.add('booking-chart__booking-cell')
    bookingCell.classList.add('booking-chart__booking-cell--available')

    const thisBooking = bookingsOnThisRow.find((booking) => booking.roomId == room.id)

    if (thisBooking) {
        bookingCell.classList.add('booking-chart__booking-cell--booking')
        bookingCell.classList.remove('booking-chart__booking-cell--available')
    }

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
