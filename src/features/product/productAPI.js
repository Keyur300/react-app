import axios from "axios";

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT
export function fetchProduct() {
    console.log(ENDPOINT, "ENDPOINTENDPOINTENDPOINT");
    return axios.get(`${ENDPOINT}/products`)
}