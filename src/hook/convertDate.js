export const convertDate = (value) => {
    const time = value.slice(11, 16);
    const date = value.slice(0, 10)

    return `${date} ${time}`
}