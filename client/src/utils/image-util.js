const getImageURL = (name) => {
    return new URL(`../images/${name}`, import.meta.url).href;
}

export { getImageURL };