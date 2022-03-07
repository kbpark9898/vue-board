const writeData = (key, data) => {
  localStorage.setItem(key, data);
};

const getData = (key) => {
  return localStorage.getItem(key);
};
const DButil = {
  writeData: writeData,
  getData: getData,
};

export default DButil;
