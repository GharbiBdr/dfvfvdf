import { apiGet } from "./standardApi"; 
export async  function apiGetListCategories() {
  const data = await  apiGet('/sub-category/findCategoryAndSubCategory')
  return data
}
