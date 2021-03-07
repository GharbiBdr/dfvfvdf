import { apiGet, apiPost } from "./standardApi"

export async function getGroups () {
    const groups = await apiGet("/group/allgroup")
    return groups
}

export async function getSousGroups (groupId){
    const subGroup = await apiGet(`/sub-group/getSubGroupByGroup/${groupId}`)
    return subGroup
}

export async function createContact(formData) {
    const response = await apiPost('/contact/createcontact', formData, 'form-data')
    return response
}

export async function getContactList() {
    const contacts = await apiGet('/contact/getAllContact')
    return contacts
}
