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
        const userEmail = userListItem.querySelector('.user-list__email')
        userName.innerText = `${user.firstName} ${user.lastName}`
        userEmail.innerText = user.email

        const deleteButton = userListItem.querySelector('.user-list__delete-button')
        deleteButton.addEventListener('click', deleteButton_onClick)
        userList.appendChild(userListItem)
    })
}

function deleteButton_onClick(e) {
    console.log(`deleteButton_onClick  e:`, e)

    const userListItem = e.target.parentNode.parentNode
    const userName = userListItem.querySelector('.user-list__name')
    console.log(`deleteButton_onClick  userName:`, userName)

    const fullName = userName.innerText
    console.log(`deleteButton_onClick  fullName:`, fullName)
    const confirmation = window.confirm(`Are you sure you want to delete ${fullName}?`)
    if (!confirmation) return
}
