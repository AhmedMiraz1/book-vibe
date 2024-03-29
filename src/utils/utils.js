import { toast } from "react-toastify";

const getReadings = () => {
  const readingList = localStorage.getItem("read-book");
  if (readingList?.length) {
    return JSON.parse(readingList);
  }
  return [];
};

const saveReadings = (book) => {
  const readingList = getReadings();
  const exist = readingList.find((item) => item.id == book.id);

  if (exist) {
    return toast.error(" You're already added read list");
  }
  readingList.push(book);
  localStorage.setItem("read-book", JSON.stringify(readingList));
  toast('Reading List Added')
};

const getWishes = () => {
  const wishList = localStorage.getItem("Wish-list");
  if (wishList?.length) {
    return JSON.parse(wishList);
  }
  return [];
};

const saveWishes = (book) => {
  const wishList = getWishes();
  console.log("Book", book)
  const isAlreadyExists = wishList.find((item) => item.id == book.id);

  console.log('isAlreadyExists', isAlreadyExists  )

  if (isAlreadyExists) {
    return toast.error("Already added");
  }

  const readingList = getReadings();
  const isAlreadyReading = readingList.find((item) => item.id == book.id);

  if (isAlreadyReading) {
    return toast.error("You're already reading");
  }

  console.log(wishList)
  wishList.push(book)
  localStorage.setItem("wish-List", JSON.stringify([...wishList, book]));
  toast("You're added wishlist")
  
};

export { getReadings, saveReadings, getWishes, saveWishes };
