export const createURL = (filters: {}) => {
  let str = ``;
  for (const [key, value] of Object.entries(filters)) {
    if (value) {
      str += `&${key}=${value}`;
    }
  }
  return str;
};
