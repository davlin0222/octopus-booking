import {
    clockFormatHour,
    formatHourDuration,
    formatDate,
} from '../../assets/js/time-utils.js'
import { fetchRooms } from './rooms.js'
import { fetchBookings } from '../../assets/js/bookings.js'

const state = { mouseDown: false, selectionState: 'neither' }
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

function determineBookingCellStatus(bookingCell, thisBooking) {
    if (thisBooking?.isUserBooking) return '_user-booking'
    if (thisBooking) return '_booking'
    return '_available'
}

function createBookingCell(hour, room, bookingsOnThisRow) {
    const bookingCell = document.createElement('td')
    const thisBooking = bookingsOnThisRow.find((booking) => booking.roomId == room.id)
    const bookingCellStatus = determineBookingCellStatus(bookingCell, thisBooking)
    bookingCell.classList.add('booking-chart__booking-cell')
    bookingCell.classList.add(bookingCellStatus)

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
    toggleSelection(e.target)
}
function bookingCell_onMouseOver(e) {
    if (state.mouseDown) toggleSelection(e.target)
}

function toggleSelection(bookingCell) {
    toggleTheCell(bookingCell)
    updateSelectionState()
    toggleSubmitButton()
    console.log(`toggleCellSelect  state.selectionState:`, state.selectionState)
}
function toggleSubmitButton() {
    if (state.selectionState == 'cancel') {
        document.querySelector('.booking-form__submit._book').classList.add('_hidden')
        document
            .querySelector('.booking-form__submit._cancel')
            .classList.remove('_hidden')
        return
    }
    document.querySelector('.booking-form__submit._book').classList.remove('_hidden')
    document.querySelector('.booking-form__submit._cancel').classList.add('_hidden')
}

function toggleTheCell(bookingCell) {
    if (bookingCell.classList.contains('_booking')) return
    if (bookingCell.classList.contains('_on-same-row')) return

    if (state.selectionState == 'cancel') return userBookingToggle(bookingCell)
    if (state.selectionState == 'book') return normalToggle(bookingCell)

    if (bookingCell.classList.contains('_user-booking')) {
        bookingCell.classList.remove('_user-booking')
        bookingCell.classList.add('_selected-user-booking')
        return
    }
    if (bookingCell.classList.contains('_selected-user-booking')) {
        bookingCell.classList.remove('_selected-user-booking')
        bookingCell.classList.add('_user-booking')
        return
    }
    normalToggle(bookingCell)
}

function normalToggle(bookingCell) {
    if (
        bookingCell.classList.contains('_user-booking') ||
        bookingCell.classList.contains('_selected-user-booking')
    )
        return

    const bookingCellsOnThisRow = bookingCell.parentNode.childNodes
    const otherBookingCellsOnThisRow = Array.from(bookingCellsOnThisRow).filter(
        (bookingCellOnRow) => bookingCellOnRow != bookingCell
    )
    // const availableBookingCellsOnThisRow = otherBookingCellsOnThisRow.filter(
    //     (bookingCell) => bookingCell.classList.contains('_available')
    // )
    otherBookingCellsOnThisRow.forEach((bookingCell) => {
        if (
            !bookingCell.classList.contains('_available') ||
            !bookingCell.classList.contains('_on-same-row')
        )
            bookingCell.classList.toggle('_available')
        bookingCell.classList.toggle('_on-same-row')
    })

    bookingCell.classList.toggle('_available')
    bookingCell.classList.toggle('_selected')
}

function userBookingToggle(bookingCell) {
    if (bookingCell.classList.contains('_user-booking')) {
        bookingCell.classList.remove('_user-booking')
        bookingCell.classList.add('_selected-user-booking')
        return
    }
    if (bookingCell.classList.contains('_selected-user-booking')) {
        bookingCell.classList.remove('_selected-user-booking')
        bookingCell.classList.add('_user-booking')
        return
    }
}

function updateSelectionState() {
    const selectedUserBookings = document.querySelectorAll(
        '.booking-chart__booking-cell._selected-user-booking'
    )
    console.log(`updateSelectionState  selectedUserBookings:`, selectedUserBookings)
    const selected = document.querySelectorAll('.booking-chart__booking-cell._selected')
    console.log(`updateSelectionState  selected:`, selected)
    if (selectedUserBookings.length > 0) {
        state.selectionState = 'cancel'
        return
    }
    if (selected.length > 0) {
        state.selectionState = 'book'
        return
    }
    state.selectionState = 'neither'
}
