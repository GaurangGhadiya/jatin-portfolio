const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((reaponse) => {
    // console.log("response", reaponse);
  });
};

export default swDev;
