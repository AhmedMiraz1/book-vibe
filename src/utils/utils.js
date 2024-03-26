

const getStoredToBookCard = ()=>{
    const storedToBookCard =localStorage.getItem("book-card")
    if(storedToBookCard){
        return JSON.parse(storedToBookCard)
    }
    return []
}



const saveToBookCard = bookId =>{
    const storedToBookCard =getStoredToBookCard()
    const exist =storedToBookCard.find(addBook => addBook === bookId);
    if(!exist){
        storedToBookCard.push(bookId)
        localStorage.setItem('book-card', JSON.stringify(storedToBookCard))
    }
}




export {getStoredToBookCard, saveToBookCard }