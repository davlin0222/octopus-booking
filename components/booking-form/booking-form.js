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

    users.forEach((user) => {
        const invitationListItem = document.createElement('li')
        const invitationLabel = document.createElement('label')
        const invitationInput = document.createElement('input')
        const invitationSpan = document.createElement('span')

        invitationSpan.innerText = `${user.firstName} ${user.lastName}`
        invitationSpan.classList.add('invitations__text')
        invitationInput.classList.add('invitations__input')
        invitationInput.type = 'checkbox'
        invitationInput.value = user.email
        invitationLabel.appendChild(invitationInput)
        invitationLabel.appendChild(invitationSpan)
        invitationLabel.classList.add('invitations__label')
        invitationListItem.appendChild(invitationLabel)
        invitationListItem.classList.add('invitations__list-item')

        invitationsList.appendChild(invitationListItem)
    })
}
