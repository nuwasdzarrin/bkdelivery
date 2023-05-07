export const convertStringToSlug = (Text) => {
    return Text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
}