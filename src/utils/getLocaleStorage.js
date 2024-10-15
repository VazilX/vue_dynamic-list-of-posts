export const getLocaleStorage = (key) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  return null;
};
