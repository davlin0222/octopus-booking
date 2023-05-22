import { fetchUsers } from '../../assets/js/users.js'

renderUserList()

async function renderUserList() {
    const users = await fetchUsers()

    const userList = document.querySelector('.user-list')

    const template = document.querySelector('#user-list__item-template')

    users.forEach((user) => {
        if (user.isLoggedIn) return
        const userListItem = template.content.cloneNode(true)
        const userName = userListItem.querySelector('.user-list__name')
        userName.innerText = `${user.firstName} ${user.lastName}`

        userList.appendChild(userListItem)
    })
}
