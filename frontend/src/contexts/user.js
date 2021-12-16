import { createContext } from "react"

const apiUrl = `http://localhost:5000/users`

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const getUsers = () => {
        return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data)
    }

    const getUser = slug => {
        return fetch(`${apiUrl}/${slug}`)
        .then(response => response.json())
        .then(data => data)
    }

    const createUser = body => {
        return fetch (`${apiUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => data)
    }

    const value = {
        getUsers,
        getUser,
        createUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider
}