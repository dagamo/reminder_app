export const verifyMonth = ( years, year, month) => {
  try {
    if (years[year][month]) {
      return true;
    }
  } catch (e) {
    return false;
  }
};