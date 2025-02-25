var portApi =
  "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=3aaf76d85ab21f7ae0cc40a4f575dc19&units=metric";
fetch(portApi)
  .then((responses) => responses.json())

  .then((posts) => console.log(posts))
  .catch((err) => console.log("error"));
