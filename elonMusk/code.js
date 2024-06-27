document.addEventListener("DOMContentLoaded", () => {
  let elonText = document.querySelector(".textSpawn");
  let tabTitle = ["Elon Musk", "The G.O.A.T.", "Space X", "Gros cerveau"];
  let name = "Elon Reeve Musk";
  let worker = [
    "- Entrepreneur",
    "- Ingenieur",
    "- Investisseur",
    "- Homme d'affaire",
    "- Programmeur",
    "- Leader",
  ];
  let have = [
    "Doctorat en physique energitique",
    "Open ai",
    "X",
    "Tesla",
    "Blastar",
    "Paypal",
    "Neuralink",
    "Space X",
  ];
  let contact = ["X", "Facebook", "Instagram"];

  const ft_typewriter = (e, word, count) => {
    let i = 0;
    let timer = setInterval(() => {
      if (i < word.length) {
        e.innerHTML += word[i];
        i++;
      } else {
        clearInterval(timer);
      }
    }, count);
  };
  const ft_ul = (e, tab) => {
    for (let i = 0; i < tab.length; i++) {
      ft_typewriter(e[i], tab[i], 75);
    }
  };

  setTimeout(() => {
    ft_typewriter(elonText, name, 25);
  }, 5000);
  setTimeout(() => {
    ft_ul(document.querySelectorAll(".working"), worker);
  }, 7000);
  setInterval(() => {
    document.querySelector("title").innerHTML =
      tabTitle[Math.floor(Math.random() * tabTitle.length)];
  }, 5000);
});
