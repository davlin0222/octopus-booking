const rooms = [{ id: 1 }, { id: 2 }, { id: 3 }]

const header = createHeader(rooms)

const bookingChart = document.querySelector('#booking-chart')
bookingChart.appendChild(header)

function createHeader(rooms) {
    const timeHeaderCell = document.createElement('th')
    timeHeaderCell.classList.add('booking-chart__header-cell')

    const headerCells = rooms.map((room) => {
        const headerCell = document.createElement('th')
        headerCell.classList.add('booking-chart__header-cell')
        headerCell.innerText = room.id
        return headerCell
    })

    const header = document.createElement('thead')
    header.appendChild(timeHeaderCell)
    headerCells.forEach((headerCell) => header.appendChild(headerCell))
    return header
}
