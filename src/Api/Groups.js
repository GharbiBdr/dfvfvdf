import { apiGet } from "./standardApi";
export async  function apiGetListGroup() {
  const data = await  apiGet('/sub-group/findGroupAndSubGroup')
  return data
}
