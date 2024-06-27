document.addEventListener("DOMContentLoaded", () => {
  let tabTitle = ["Elon Musk", "The G.O.A.T.", "Space X", "Gros cerveau"];
  let name = "Elon Reeve Musk";
  let job = "Milliardaire Americain";
  let worker = [
    "- Entrepreneur",
    "- Ingenieur",
    "- Investisseur",
    "- Fondateur (Neuralink, Zip2 Corporation, OpenAI, The Boring Company, Space X)",
    "- Developpe un logiciel de paiment securise",
    "- President (SolarCity, X)",
    "- Chercheur",
    "- Doctorat en physique energitique",
    "- Sait diriger une equipe",
    "- Visionnaire",
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
    ft_typewriter(document.querySelector(".elonName"), name, 25);
  }, 5000);
  setTimeout(() => {
    ft_typewriter(document.querySelector(".elonJob"), job, 25);
  }, 6000);
  setTimeout(() => {
    ft_ul(document.querySelectorAll(".working"), worker);
  }, 7000);
  setInterval(() => {
    document.querySelector("title").innerHTML =
      tabTitle[Math.floor(Math.random() * tabTitle.length)];
  }, 5000);
});
