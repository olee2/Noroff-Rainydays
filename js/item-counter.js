export const counter = () => {
    const items = Object.keys(localStorage);
    return items.length > 0 ? items.length: "";
}