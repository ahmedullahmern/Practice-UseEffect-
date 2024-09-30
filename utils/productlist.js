export async function getAllproducts() {
    try {
        const productslist = fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
        return productslist;
    } catch (error) {
        throw Error(error)
    }

}