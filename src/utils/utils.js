

const getStoredToBookCard = ()=>{
    const storedToBookCard =localStorage.getItem("book-card")
    if(storedToBookCard){
        return JSON.parse(storedToBookCard)
    }
    return []
}



const saveToBookCard = id =>{
    const storedToBookCard =getStoredToBookCard()
    const exist =storedToBookCard.find(addBook => addBook === id);
    if(!exist){
        storedToBookCard.push(id)
        localStorage.setItem('book-card', JSON.stringify(storedToBookCard))
    }
}




export {getStoredToBookCard, saveToBookCard }