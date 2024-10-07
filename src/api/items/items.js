const URL = "https://604781a0efa572c1.mokky.dev/items";

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
