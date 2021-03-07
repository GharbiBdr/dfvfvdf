import { apiGet, apiPost } from "./standardApi";
export async function apiGetListLot(lastLotId) {
    const data = await apiGet("/lot/getlastcreatedlot?perPage=16&lotId=" + lastLotId)
    return data
}

export async function getCategoriesList() {
    const categories = await apiGet('/category/allcategory')
    return categories
}

export async function getArtistList() {
    const artists = await apiGet('/artiste/allArtists')
    return artists
}


export async function getsubCategory(id) {
    const subCategory = await apiGet(`/sub-category/getSubCategoryByCategory/${id}`)
    return subCategory
}

export async function createLot(formData) {
    const lot = await apiPost('/lot/createlot', formData, 'form-data')
    return lot
}


export async function getLotById(id){
    const lot = await apiGet(`/lot/getlotbyid/${id}`)
    return lot 
}




