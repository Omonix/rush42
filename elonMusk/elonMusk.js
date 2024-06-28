document.addEventListener("DOMContentLoaded", () => {
  let clickCount = 0;
  let iconInsta = document.querySelectorAll(".iconContact")[0];
  let iconFacebook = document.querySelectorAll(".iconContact")[1];
  let iconX = document.querySelectorAll(".iconContact")[2];
  let tabTitle = [
    "CV d'Elon Musk",
    "The G.O.A.T. 🐐",
    "Space 🇽",
    "Gros cerveau 🧠",
    "This is Elon Musk",
    "200 milliards 💰",
  ];
  let name = "Elon Reeve Musk";
  let job = "Milliardaire Americain";
  let descript =
    "Elon Musk, né en 1971 à Pretoria en Afrique du Sud, est un entrepreneur et un innovateur, connu pour son ambition de révolutionner plusieurs industries clés.";
  let worker = [
    "- Entrepreneur 📈",
    "- Ingenieur 🔧",
    "- Investisseur 💸",
    "- Fondateur (Neuralink, Zip2 Corporation, OpenAI, The Boring Company, Space X) 👔",
    "- Developpe un logiciel de paiment securise 💻",
    "- President (SolarCity, X) 👨‍💼",
    "- Chercheur 👨🏼‍🔬",
    "- Doctorat en physique energitique 🎓",
    "- Sait diriger une equipe 🖇",
    "- Visionnaire 👁️",
  ];
  let more =
    "Il s'est fait un nom en co-fondant et développant des entreprises de premier plan dans divers secteurs, notamment PayPal dans le domaine des paiements en ligne, SpaceX dans l'aérospatiale, Tesla dans les véhicules électriques, et Neuralink dans les interfaces cerveau-machine.";

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
  const ft_countClicker = (e, link) => {
    if (clickCount === 4) {
      window.open(link);
      e.style.width = 10 + "vw";
      e.style.height = 10 + "vw";
      clickCount = 0;
      e.style.cursor = "not-allowed";
    } else if (clickCount === 3) {
      e.style.cursor = "pointer";
      clickCount++;
      e.style.height = e.offsetWidth + 10 + "px";
      e.style.width = e.offsetWidth + 10 + "px";
    } else {
      clickCount++;
      e.style.height = e.offsetWidth + 5 + "px";
      e.style.width = e.offsetWidth + 5 + "px";
    }
  };

  iconInsta.addEventListener("click", () => {
    ft_countClicker(iconInsta, "https://www.instagram.com/elonmxsk/");
  });
  iconFacebook.addEventListener("click", () => {
    ft_countClicker(iconFacebook, "https://www.facebook.com/groups/elonmusk1/");
  });
  iconX.addEventListener("click", () => {
    ft_countClicker(
      iconX,
      "https://x.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    );
  });

  setInterval(() => {
    document.querySelector("title").innerHTML =
      tabTitle[Math.floor(Math.random() * tabTitle.length)];
  }, 5000);
  setTimeout(() => {
    ft_typewriter(document.querySelector(".elonName"), name, 35);
  }, 3500);
  setTimeout(() => {
    ft_typewriter(document.querySelector(".elonJob"), job, 35);
  }, 4650);
  setTimeout(() => {
    ft_typewriter(document.querySelector(".elonDescript"), descript, 25);
  }, 5650);
  setTimeout(() => {
    ft_ul(document.querySelectorAll(".working"), worker);
  }, 9750);
  setTimeout(() => {
    ft_typewriter(document.querySelector(".more"), more, 25);
  }, 11000);
});
