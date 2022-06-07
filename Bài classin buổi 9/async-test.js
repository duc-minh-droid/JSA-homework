
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`)
        this.name = 'HttpError'
        this.response = response
    }
}

const loadJson = async (url) => {
    const res = await fetch(url)

    if (!(res.status == 200)) {
        throw new HttpError(res)
    }

    const data = await res.json()
    return data
}

const demoGithubUser = async () => {
    try {
        let name = prompt("Enter a name?", "iliakan")
    
        const user = await loadJson(`https://api.github.com/users/${name}`)
        const username = await user.name || name
        alert(username)
        return username
    } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.")
        } else {
            throw err
        }
    }

}

demoGithubUser()