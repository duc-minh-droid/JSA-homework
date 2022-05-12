console.log(document.forms.ShoppingList)
doShowAll()

function checkBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true
    } else {
         return false
    }
}

function doShowAll() {
    if (checkBrowser()) {
        let key = ''
        let list = '<tr><th>Item</th><th>Value</th></tr>\n'
        
        let i = 0
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i)
            list += `<tr><td>${key}</td>\n<td>${localStorage.getItem(key)}</td></tr>\n`
        }
    
        if (list == '<tr><th>Item</th><th>Value</th></tr>\n') {
            list += '<tr><td><i>Empty</i></td>\n<td><i>Empty</i></td></tr>\n'
        }
        
        document.getElementById('list').innerHTML = list
        console.log(list)
    } else {
        alert('Error!')
    }


}


function SaveItem() {
    let name = document.forms.ShoppingList.name.value;
    let data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();
}


function ModifyItem() {
    let name1=document.forms.ShoppingList.name.value;
    let data1=document.forms.ShoppingList.data.value;
    
    if (localStorage.getItem(name1) != null) {
        localStorage.setItem(name1, data1);
        document.forms.ShoppingList.data.value = localStorage.getItem(name1);
    }
    doShowAll( );
}

function RemoveItem() {
    let name=document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value=localStorage.removeItem(name);
    doShowAll();
}

function ClearAll() {
    localStorage.clear()
    doShowAll()
}

const saveI = document.getElementById('save-item')
const modifyI = document.getElementById('modify-item')
const deleteI = document.getElementById('delete-item')
const clearI = document.getElementById('clear-item')

saveI.addEventListener('click',SaveItem)
modifyI.addEventListener('click',ModifyItem)
deleteI.addEventListener('click',RemoveItem)
clearI.addEventListener('click',ClearAll)



