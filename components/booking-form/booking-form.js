import {
    getSelectedBookings,
    getSelectedUserBookings,
} from '../booking-chart/get-selected-bookings.js'
import { getSelectedDate } from '../date-selector/get-selected-date.js'
import { createBookings, cancelBookings } from '../../assets/js/bookings.js'

const bookButton = document.querySelector('#book-button')
const cancelBookingsButton = document.querySelector('#cancel-bookings-button')
bookButton.addEventListener('click', bookButton_onClick)
cancelBookingsButton.addEventListener('click', cancelBookingsButton_onClick)

async function bookButton_onClick(e) {
    e.preventDefault()
    const selectedBookings = getSelectedBookings()
    const selectedDate = getSelectedDate()
    const invitations = getInvitations()
    const success = /*await*/ createBookings(selectedBookings, selectedDate, invitations)
    console.log(`bookButton_onClick  success:`, success)

    if (!success) return

    // window.location.reload()

    const selectedCells = document.querySelectorAll(
        '.booking-chart__booking-cell._selected'
    )

    selectedCells.forEach((selectedCell) => {
        selectedCell.classList.remove('_selected')
        selectedCell.classList.add('_user-booking')
    })

    const invitationsListItemInputs = document.querySelectorAll('.invitations__input')
    invitationsListItemInputs.forEach((input) => {
        input.checked = false
    })

    const selectedTimesElement = document.querySelector('#selectedItems')
    selectedTimesElement.innerHTML = ''
}

async function cancelBookingsButton_onClick(e) {
    e.preventDefault()
    const selectedBookings = getSelectedUserBookings()
    console.log(`cancelBookingsButton_onClick  selectedBookings:`, selectedBookings)
    const selectedDate = getSelectedDate()
    const success = await cancelBookings(selectedBookings, selectedDate)
    // console.log(`cancelBookingsButton_onClick  success:`, success)

    if (!success) return

    window.location.reload()

    // const selectedUserBookingCells = document.querySelectorAll(
    //     '.booking-chart__booking-cell._selected-user-booking'
    // )

    // selectedUserBookingCells.forEach((selectedUserBookingCell) => {
    //     selectedUserBookingCell.classList.remove('_selected-user-booking')
    //     selectedUserBookingCell.classList.add('_available')
    // })
}

function getInvitations() {
    const checkedBoxes = document.querySelectorAll('input[name="recipients[]"]:checked')
    const invitations = Array.from(checkedBoxes).map((checkbox) => ({
        userId: checkbox.value,
    }))
    return invitations
}
