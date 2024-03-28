

const getStoredToReadBook = ()=>{
    const storedToReadBook =localStorage.getItem("read-book")
    if(storedToReadBook){
        return JSON.parse(storedToReadBook)
    }
    return []
}



const saveToReadBook = id =>{
    const storedToReadBook =getStoredToReadBook()
    const exist =storedToReadBook.find(addBook => addBook === id);
    if(!exist){
        storedToReadBook.push(id)
        localStorage.setItem('read-book', JSON.stringify(storedToReadBook))
    }
}

const getStoredToWishList = ()=>{
    const storedToWishList =localStorage.getItem("Wish-list")
    if(storedToWishList){
        return JSON.parse(storedToWishList)
    }
    return []
}


const saveToWishList = id =>{
    const storedToWishList =getStoredToWishList()
    const exist =storedToWishList.find(addBook => addBook === id);
    if(!exist){
        storedToWishList.push(id)
        localStorage.setItem('wish-List', JSON.stringify(storedToWishList))
    }
}




export {getStoredToReadBook, saveToReadBook, getStoredToWishList , saveToWishList}