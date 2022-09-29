import axios from "axios"

const baseUrl = 'https://hubit-core.herokuapp.com/client/api/1.0/public'

export default axios.create({
    baseURL:baseUrl
})