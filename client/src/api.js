import axios from "axios"

const service = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api",
    withCredentials: true
})

const errHandler = err => {
    console.error(err)
    if (err.response && err.response.data) {
        console.error("API response", err.response.data)
        throw err.response.data.message
    }
    throw err
}

export default {
    service: service,

    // This method is synchronous and returns true or false
    // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
    isLoggedIn() {
        return localStorage.getItem("user") != null
    },

    // This method returns the user from the localStorage
    // Be careful, the value is the one when the user logged in for the last time
    getLocalStorageUser() {
        return JSON.parse(localStorage.getItem("user"))
    },

    // This method signs up and logs in the user
    signup(userInfo) {
        return service
            .post("/signup", userInfo)
            .then(res => {
                // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
                localStorage.setItem("user", JSON.stringify(res.data))
                return res.data
            })
            .catch(errHandler)
    },

    login(username, password) {
        return service
            .post("/login", {
                username,
                password
            })
            .then(res => {
                // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
                localStorage.setItem("user", JSON.stringify(res.data))
                return res.data
            })
            .catch(errHandler)
    },

    logout() {
        localStorage.removeItem("user")
        return service.get("/logout")
    },

    // This is an example on how to use this method in a different file
    // api.getSelections().then(selections => { /* ... */ })
    getSelections() {
        return service
            .get("/selections")
            .then(res => res.data)
            .catch(errHandler)
    },

    addSelection(body) {
        return service
            .post("/selections", body)
            .then(res => res.data)
            .catch(errHandler)
    },

    // Added the lines below in order to get the selection by id

    getSelectionById(id) {
        return service
            .get(`/selections/${id}`)
            .then(res => res.data)
            .catch(errHandler)
    },

    updateSelection(id, body) {
        return service
            .put(`/selections/${id}`, body)
            .then(res => res.data)
            .catch(errHandler)
    },

    deleteSelection(id) {
        return service
            .delete(`/selections/${id}`)
            .then(res => res.data)
            .catch(errHandler)
    },

    getSecret() {
        return service
            .get("/secret")
            .then(res => res.data)
            .catch(errHandler)
    },

    // Add new url

    addUrl(body) {
        return service
            .post("/addurl", body)
            .then(res => res.data)
            .catch(errHandler)
    },

    // Get url from database

    getUrl() {
        return service
            .get("/geturl")
            .then(res => res.data)
            .catch(errHandler)
    }
}
