import {
    SERVICE as request,
    SERVICEDEFAULT as requestbody
} from "./request.js"

export function addlogin(query) {
    return requestbody({
        url: `/login/addlogin`,
        method: "post",
        params: query
    });
}