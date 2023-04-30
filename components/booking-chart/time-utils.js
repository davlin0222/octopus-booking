export const ensureTwoDigit = (number) => {
    const numberString = number.toString()
    return numberString.length == 1 ? '0' + numberString : numberString
}

export const clockFormatHour = (hour) => {
    return ensureTwoDigit(hour) + ':00'
}
