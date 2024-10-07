const URL = "https://0064b15d2c350d29.mokky.dev/items";

export const getItems = () => {
  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP status error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
