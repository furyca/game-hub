export const createURL = (filters: {}) => {
  let str = ``;
  for (const [key, val] of Object.entries(filters)) {
    if (key === "platforms" || key === "parent_platforms") {
      const { id } = val as { id: number | null };
      if (id) {
        str += `${key}=${id}&`;
      }
    } 
    else {
      const { value } = val as { value: string };

      if (value) {
        str += `${key}=${value}&`;
      }
    }
  }
  str = str.slice(0, str.length - 1);

  return str;
};
