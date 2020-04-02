export const getMenu = async () => {
  const response = await fetch("http://localhost:5000/api/beans");
  const data = await response.json();
  return data;
};

export const placeOrder = async () => {
  const response = await fetch("http://localhost:5000/api/beans", {
    method: "POST"
  });
  const data = await response.json();
  return data;
};
