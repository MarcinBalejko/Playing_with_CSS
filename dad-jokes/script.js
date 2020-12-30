const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const getDadJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);

  const data = await res.json();

  jokeEl.innerHTML = `<p>${data.joke}</p>`;
};

jokeBtn.addEventListener("click", getDadJoke);

// const getDadJoke = () => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = `<p>${data.joke}</p>`;
//     });
// };

// jokeBtn.addEventListener("click", getDadJoke);
