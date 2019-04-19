export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.sessionStorage.getItem("gatsbyUser")
    ? JSON.parse(window.sessionStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
    window.sessionStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ password}) => {
    if (password === `1970`) {
        return setUser({
            username: `member`
        })
    }
    return false;
}

export const isLoggedIn = () => {
    const user = getUser()

    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback();
}