import {
    getSelectedBookings,
    getSelectedUserBookings,
} from '../booking-chart/get-selected-bookings.js'
import { getSelectedDate } from '../date-selector/get-selected-date.js'
import { createBookings, cancelBookings } from '../../assets/js/bookings.js'
import { fetchUsers } from '../../assets/js/users.js'

const bookButton = document.querySelector('#book-button')
const cancelBookingsButton = document.querySelector('#cancel-bookings-button')
bookButton.addEventListener('click', bookButton_onClick)
cancelBookingsButton.addEventListener('click', cancelBookingsButton_onClick)

renderInvitationList()

async function bookButton_onClick(e) {
    e.preventDefault()
    // console.log(`bookButton_onClick  recipients:`, e.target.form.recipients)
    console.log(`bookButton_onClick  e.target:`, new FormData(e.target.form))
    const selectedBookings = getSelectedBookings()
    const selectedDate = getSelectedDate()
    const success = /*await*/ createBookings(selectedBookings, selectedDate)
    console.log(`bookButton_onClick  success:`, success)

    const selectedCells = document.querySelectorAll(
        '.booking-chart__booking-cell._selected'
    )

    selectedCells.forEach((selectedCell) => {
        selectedCell.classList.remove('_selected')
        selectedCell.classList.add('_user-booking')
    })
}

async function cancelBookingsButton_onClick(e) {
    e.preventDefault()
    const selectedBookings = getSelectedUserBookings()
    console.log(`cancelBookingsButton_onClick  selectedBookings:`, selectedBookings)
    const selectedDate = getSelectedDate()
    const success = await cancelBookings(selectedBookings, selectedDate)
    // console.log(`cancelBookingsButton_onClick  success:`, success)

    if (success) {
        window.location.reload()
    }
}

async function renderInvitationList() {
    const users = await fetchUsers()
    console.log(`renderInvitationList  users:`, users)

    const invitationsList = document.querySelector('.invitations__list')
}
