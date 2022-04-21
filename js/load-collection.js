import { fetchData } from "./fetch-data.js";
import { collectionData } from "./collection-data.js";
import { collectionHTML } from "./create-html.js";

export const loadCollection = async (url, container, category="all") => {
    const data = await fetchData(url);
    const products = await collectionData(data, category);
    container.innerHTML = collectionHTML(products);
}