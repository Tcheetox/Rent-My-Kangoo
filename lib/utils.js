export const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)

export const isSupportingWebp = async () => {
    if (!self.createImageBitmap) return false
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
    const blob = await fetch(webpData).then(r => r.blob())
    return createImageBitmap(blob).then(
        () => true,
        () => false
    )
}
