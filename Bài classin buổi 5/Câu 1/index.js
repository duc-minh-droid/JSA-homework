// Add user
const inputText = document.querySelector(".inputText")
const inputName = document.querySelector(".inputName")
const inputBtn = document.querySelector(".inputBtn")
const addState = document.querySelector(".addState")

let inputKey = ""
inputName.addEventListener("input", b => {
    inputKey = b.target.value
})

let inputValue = ""
inputText.addEventListener("input", a => {
    inputValue = a.target.value
})

inputBtn.addEventListener("click",()=>{
    userList.textContent = ""
    if (inputKey == "" || inputValue == "") {
        addState.textContent = "Please insert user"
    } else {
        localStorage.setItem(inputKey, inputValue)
        renderUserList()
    }
    inputText.value = ""
    inputName.value = ""
    inputName.focus()
})


//User list
const userList = document.querySelector(".currentUser")
renderUserList()

function getUserList() {
    let userArrayList =[]
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        userArrayList.push(localStorage.getItem(key))
    }
    return userArrayList
}

function renderUserList() {
    if (localStorage.key(0) == null) {
        userList.textContent = "No current user"
    } else {
        let userArray = getUserList()
        for (let j = 0; j < userArray.length; j++) {
            userList.appendChild(document.createElement("p").appendChild(document.createTextNode(`User ${j+1}: ${userArray[j]};\n`)))
        }

    }
}

window.onstorage = ()=>{
    userList.textContent = ""
    if (localStorage.key(0) == null) {
        userList.textContent = "No current user"
    } else {
        renderUserList()
    }
}

// Change User
const fromUser = document.querySelector(".fromUser")
const toUser = document.querySelector(".toUser")
const changeBtn = document.querySelector(".changeBtn")
const changeState = document.querySelector(".changeState")

let inputFromUser = ""
fromUser.addEventListener("input", b => {
    inputFromUser = b.target.value
})

let inputToUser = ""
toUser.addEventListener("input", a => {
    inputToUser = a.target.value
})

changeBtn.addEventListener("click",()=>{
    let myUserList = getUserList()
    if ( inputFromUser == "" || inputToUser == "") {
        changeState.textContent = "Please insert user"
    } else if (!myUserList.includes(fromUser)) {
        changeState.textContent = "User does not exist"
    } else {
        let anotherUserArray = getUserList()
        anotherUserArray.map(e=>{
            for (var key in localStorage){
                let anotherUserValue = localStorage.getItem(key)
                if (anotherUserValue != null && anotherUserValue == inputFromUser) {
                    localStorage.setItem(key, inputToUser)
                }
             }
            return e
        })
        userList.textContent = ""
        renderUserList()
        changeState.textContent = "User have been changed"
    }
    fromUser.value = ""
    toUser.value = ""
})

// Delete user
const deleteUser = document.querySelector(".deleteUser")
const deleteBtn = document.querySelector(".deleteBtn")
const deleteState = document.querySelector(".deleteState")

let inputDeleteUser = ""
deleteUser.addEventListener("input", a => {
    inputDeleteUser = a.target.value
})

deleteBtn.addEventListener("click",()=>{
    let stillUserList = getUserList()
    if (inputDeleteUser == "") {
        deleteState.textContent = "Please insert user"
    } else if (!stillUserList.includes(inputDeleteUser)) {
        deleteState.textContent = "User does not exist"
    } else {
        for (var key in localStorage){
            let stillUserValue = localStorage.getItem(key)
            if (stillUserValue == inputDeleteUser) {
                localStorage.removeItem(key)
            }
        }
        deleteState.textContent = "User have been deleted"
        userList.textContent = ""
        renderUserList()
    }
})

// Clear user
const clearBtn = document.querySelector(".clearBtn")
clearBtn.addEventListener("click", ()=>{
    deleteState.textContent = "Every user have been cleared"
    localStorage.clear()
    userList.textContent = ""
    renderUserList()
})






