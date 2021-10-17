export function getFullData(timestamp, isDetail = false) {
    const date = new Date(+timestamp)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDay().toString().padStart(2, '0')
    const time = `${year}-${month}-${day} `;
    if (isDetail) {
        const hours = +date.getHours()
        const minutes = +date.getMinutes().toString().padStart(2, '0');
        const seconds = +date.getSeconds().toString().padStart(2, '0')
        return `${time} ${hours}:${minutes}:${seconds}`
    } else {
        return `${year}-${month}-${day}`;

    }
}