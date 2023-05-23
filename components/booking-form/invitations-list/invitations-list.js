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
    })
}
