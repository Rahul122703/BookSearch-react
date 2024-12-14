async function getBookData(book_name) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(
      book_name
    )}&fields=key,title,author_name,first_publish_year,cover_i`
  );
  if (!response.ok) {
    throw new Error("there was an error");
  }
  const data = await response.json();
  return data.docs;
}
export default getBookData;
