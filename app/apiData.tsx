export const fetchData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const fetchDataByName = async (name: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name.split("?")[0].toLowerCase()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data by name");
  }
  return res.json();
};

export const fetchDataByCCA3 = async (code: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code.toLowerCase()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data by cca3");
  }
  return res.json();
};
