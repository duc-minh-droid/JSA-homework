//DECLARATION
localStorage.setItem('user1', 'Phuoc');
let user1 = localStorage.getItem("user1")

localStorage.setItem('user2', 'Minh');
let user2 = localStorage.getItem("user2")

const display = document.querySelector(".display")

//STORAGE
const items = { ...localStorage } 
console.log(items)

//BUTTONS
const fetchBtn = document.querySelector(".fetch")
fetchBtn.addEventListener("click",()=>{
    let content = `${user1} and ${user2}`
    display.textContent = content
})

const change = document.querySelector(".change")
change.addEventListener("click",()=>{
    let newArr = Object.keys(items)
    let newLength = newArr.length
    for (let i = 0; i < newLength; i++) {
        let item = items[newArr[i]]
        console.log(item)
        if (item == "Phuoc") {
            item = "Ha"
        }
    }
    console.log(items)
    // let content = `${user1} and ${user2}`
    // display.textContent = content
})