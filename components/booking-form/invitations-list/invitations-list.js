import { fetchUsers } from '../../../assets/js/users.js'

renderInvitationList()

async function renderInvitationList() {
    const users = await fetchUsers()

    const invitationsList = document.querySelector('.invitations__list')

    const template = document.querySelector('#invitation-item-template')

    users.forEach((user) => {
        if (user.isLoggedIn) return
        const invitationListItem = template.content.cloneNode(true)
        const invitationInput = invitationListItem.querySelector('.invitations__input')
        invitationInput.value = user.id
        const invitationName = invitationListItem.querySelector('.invitations__name')
        const invitationEmail = invitationListItem.querySelector('.invitations__email')
        invitationName.innerText = `${user.firstName} ${user.lastName}`
        invitationEmail.innerText = user.email

        invitationsList.appendChild(invitationListItem)

        // invitationInput.addEventListener('click', invitationInput_onClick)
    })
}

// function invitationInput_onClick(e) {
//     const invitationsList = document.querySelector('.invitations__list')
//     console.log(`invitationInput_onClick  invitationsList:`, invitationsList)
// const children = Array.from(invitationsList.querySelectorAll("."))

// children.sort((a, b) => {
//     console.log(`children.sort  b:`, b)
//     console.log(`children.sort  a:`, a)
//     // const aChecked = a.querySelector('input[type="checkbox"]').checked
//     // const bChecked = b.querySelector('input[type="checkbox"]').checked

//     // if (aChecked && !bChecked) {
//     //     return -1 // a comes before b
//     // } else if (!aChecked && bChecked) {
//     //     return 1 // b comes before a
//     // } else {
//     //     return 0 // maintain the current order
//     // }
// })

// children.forEach((child) => invitationsList.appendChild(child))
// }
