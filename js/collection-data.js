export const collectionData = async (data, category='all') =>{
    data = await data;
    const filtered = data.map(jacket => {
        return {id: jacket.id, name: jacket.name, price: jacket.price, image: jacket.images[0].src, category: jacket.categories[0].slug}
        })
    console.log(category);
    if (category === 'all') return filtered;
    return filtered.filter(jacket => jacket.category === category);
}