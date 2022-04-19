export const feturedProducts = async (data) =>{
    data = await data;
    const featured = data.map(jacket => {
        return {id: jacket.id, name: jacket.name, price: jacket.price, image: jacket.images[0].src}
        })
    console.log(data)
    return featured;
}