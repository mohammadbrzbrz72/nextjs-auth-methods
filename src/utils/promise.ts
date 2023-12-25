const fakeApi = (isResolve = true, fakeData: object = {}) => {
  return new Promise((resolve, reject) => {
    if (isResolve) {
      const responseBody = JSON.stringify({
        lists: [],
        ...fakeData,
      });
      const myOptions = { status: 200, statusText: "Ok" };
      const responseMsg = new Response(responseBody, myOptions);

      setTimeout(() => {
        resolve(responseMsg);
      }, 3000);
    } else {
      const responseBody = JSON.stringify({
        message: "There is something wrong",
      });
      const myOptions = { status: 404, statusText: "Not Ok" };
      const responseMsg = new Response(responseBody, myOptions);

      setTimeout(() => {
        reject(responseMsg);
      }, 3000);
    }
  });
};

async function Log() {
  const result = await fakeApi();
  const so = await (result as any).json();

  console.log(so);
}
