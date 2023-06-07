import API from "./api"

export async function list_users() {
    return await API.get(`user/all`)
}
