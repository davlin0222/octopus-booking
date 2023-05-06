export function ensureTwoDigit(number) {
    const numberString = number.toString()
    return numberString.length == 1 ? '0' + numberString : numberString
}

export function clockFormatHour(hour) {
    return ensureTwoDigit(hour) + ':00'
}

export function formatHourDuration(hour) {
    const formattedHour = clockFormatHour(hour)
    const formattedNextHour = clockFormatHour(hour + 1)
    return `${formattedHour}-${formattedNextHour}`
}

export function formatDate(date) {
    const year = ensureTwoDigit(date.getFullYear())
    const month = ensureTwoDigit(date.getMonth() + 1)
    const dateOfMonth = ensureTwoDigit(date.getDate())
    return `${year}-${month}-${dateOfMonth}`
}
