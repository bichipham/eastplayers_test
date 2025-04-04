export const makeid = (length = 5) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export const removeAccents = (str) => {
  let strRemoveAccents = str;
  try {
    strRemoveAccents = str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  } catch (error) {
    console.log(error);
  }
  return strRemoveAccents;
};

export const searchTextRemoveAccent = (str, keyword) => {
  if (!str || !keyword) return false;
  let strRemoveAccent = removeAccents((str + "").toLowerCase());
  let keywordRemoveAccent = removeAccents(keyword.toLowerCase());
  return strRemoveAccent.includes(keywordRemoveAccent);
};