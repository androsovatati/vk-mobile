export const fakeRequest = (isSuccess = true, response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isSuccess ? resolve(response) : reject();
    }, 1000);
  });
};
