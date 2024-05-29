// Clock using setInterval

const updateTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  document.querySelector("#clock").innerText = time;
};

setInterval(updateTime, 1000);
