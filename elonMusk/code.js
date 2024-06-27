document.addEventListener("DOMContentLoaded", () => {
  let elonText = document.querySelector(".textSpawn");
  let name = "Elon Reeve Musk";
  let worker = [
    "- Entrepreneur",
    "- Ingenieur",
    "- Investisseur",
    "- Homme d'affaire",
    "- Programmeur",
  ];
  let are = [
    "- Leader",
    "- Visionnaire",
    "- Objectifs audacieux",
    "- Determination",
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
  setTimeout(() => {
    ft_ul(document.querySelectorAll(".are"), are);
  }, 9000);
});
