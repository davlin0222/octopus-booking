import { fetchUsers, deleteUser } from '../../assets/js/users.js'

renderUserList()

async function renderUserList() {
    const users = await fetchUsers()
    const userList = document.querySelector('.user-list')
    const template = document.querySelector('#user-list__item-template')

    users.forEach((user) => {
        if (user.isLoggedIn) return
        const userListItem = template.content.cloneNode(true)
        const userListItemItem = userListItem.querySelector('.user-list__item')
        userListItemItem.dataset.userId = user.id
        const userName = userListItem.querySelector('.user-list__name')
        const userEmail = userListItem.querySelector('.user-list__email')
        userName.innerText = `${user.firstName} ${user.lastName}`
        userEmail.innerText = user.email

        const deleteButton = userListItem.querySelector('.user-list__delete-button')
        deleteButton.addEventListener('click', deleteButton_onClick)
        userList.appendChild(userListItem)
    })
}

async function deleteButton_onClick(e) {
    const userListItem = e.target.parentNode.parentNode
    const userName = userListItem.querySelector('.user-list__name')
    const fullName = userName.innerText
    const confirmation = window.confirm(`Are you sure you want to delete ${fullName}?`)
    if (!confirmation) return

    const userId = userListItem.dataset.userId
    const success = await deleteUser(userId)
    if (success) location.reload()
}
