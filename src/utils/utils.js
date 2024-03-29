import { toast } from "react-toastify";

const getReadings = () => {
  const readingList = localStorage.getItem("read");
  if (!readingList?.length) return [];
  return JSON.parse(readingList);
};

const saveReadings = (book) => {
  const readingList = getReadings();
  const exist = readingList.find((item) => item.id == book.id);

  if (exist) {
    return toast.error(" You're already added read list");
  }
  readingList.push(book);
  localStorage.setItem("read", JSON.stringify(readingList));
  toast("Reading List Added");
};

const getWishes = () => {
  const wishList = localStorage.getItem("wish");
  if (!wishList?.length) return [];
  return JSON.parse(wishList);
};

const saveWishes = (book) => {
  const wishList = getWishes();
  const isAlreadyExists = wishList.find((item) => item.id == book.id);

  if (isAlreadyExists) {
    return toast.error("Already added");
  }

  const readingList = getReadings();
  const isAlreadyReading = readingList.find((item) => item.id == book.id);

  if (isAlreadyReading) {
    return toast.error("You're already reading");
  }

 
  localStorage.setItem("wish", JSON.stringify([...wishList, book]));
  toast("You're added wishlist");
};

export { getReadings, saveReadings, getWishes, saveWishes };
