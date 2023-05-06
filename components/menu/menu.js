const logoutButton = document.querySelector('#logout-button')

logoutButton.addEventListener('click', logoutButton_onClick)

async function logoutButton_onClick(e) {
    try {
        const response = await fetch('../api/logout.php')

        const text = await response.text()
        // console.log(`login  text:`, text)

        window.location.reload()
    } catch (error) {
        console.error(error)
        return null
    }
}
