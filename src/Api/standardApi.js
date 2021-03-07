import { API_URL } from '../Config/Config';
import Store from '../Redux/store'
import { apiRefresh, getAccessToken } from './RefreshToken';


const createHeader = (contentType) => {
    if (contentType === "form-data") {
        return {
            Authorization: 'Bearer ' + getAccessToken()
        }
    } else {
        return {
            'Content-Type': contentType,
            accept: 'application/json',
            Authorization: 'Bearer ' + getAccessToken()
        }
    }
};



export async function apiGet(api) {
    const response = await fetch(API_URL + api, {
        method: 'GET',
        mode: 'cors',
        headers: createHeader('application/json')
    });
    const responseJson = await response.json();
    if (responseJson.statusCode === 401) {
        const res = await apiRefresh();
        if (res.statusCode === 200) {
            await Store.dispatch({ type: "REFRESH_TOKEN", payload: { token: res.refreshToken, accessToken: res.accessToken } })
            return apiGet(api);
        } else {
            Store.dispatch({ type: "LOGOUT" });
            return null;
        }
    } else return responseJson
}
export async function apiPost(api, body, contentType = "application/json") {

    const response = await fetch(API_URL + api, {
        method: 'POST',
        mode: 'cors',
        headers: createHeader(contentType),
        body: body
    });
    const responseJson = await response.json();
    if (responseJson.statusCode === 401) {
        const res = await apiRefresh();
        if (res.statusCode === 200) {
            await Store.dispatch({ type: "REFRESH_TOKEN", payload: { token: res.refreshToken, accessToken: res.accessToken } })
            return apiPost(api, body, contentType);
        } else {
            Store.dispatch({ type: "LOGOUT" });
            return null;
        }
    } else if (responseJson.statusCode === 200) {
        return responseJson;
    } else {
        return responseJson
    }
}
export async function apiDelete(api) {
    const response = await fetch(API_URL + api, {
        method: 'Delete',
        mode: 'cors',
        headers: createHeader()
    });
    const responseJson = await response.json();
    if (responseJson.statusCode === 401) {
        const res = await apiRefresh();
        if (res.statusCode === 200) {
            await Store.dispatch({ type: "REFRESH_TOKEN", payload: { token: res.refreshToken, accessToken: res.accessToken } })
            return apiDelete(api);
        } else {
            Store.dispatch({ type: "LOGOUT" });
            return null;
        }
    } else return responseJson;

}
