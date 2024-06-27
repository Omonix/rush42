document.addEventListener("DOMContentLoaded", () => {
  let textAnim = document.querySelector(".textSpawn");
  let tabSentence = [
    "Hello World",
    "Hey, man",
    "It's a cool project",
    "I am lblonde",
    "I am tkoeller",
    "It's crazy !",
    "Look Elon Musk !",
    "Look Bill Gates !",
    "Ok, bro",
    "Wazaaaaaaaaaaaaaaaaaaaaaaa !!!!!!!",
    "Bienvenue ! Nos cookies ne contiennent pas de chocolat, mais des pixels.",
    "Souriez, vous économisez une ride à chaque clic.",
    "Si vous lisez ceci, félicitations, vous savez lire !",
    "Ce site a été construit avec 0% de matières grasses.",
    "Nos articles sont 100% biodégradables. Lisez-les sans culpabilité.",
    "Bienvenue dans notre univers où les licornes font la livraison.",
    "Le café de l'équipe est plus fort que votre connexion Internet.",
    "Cliquez ici si vous êtes curieux. Sinon, cliquez quand même.",
  ];
  let tabTitle = ["Magic CVs", "So cooool !"];
  let elonTitle = `
  ___________.__                     _____                __    
  \\_   _____/|  |   ____   ____     /     \\  __ __  _____|  | __
   |    __)_ |  |  /  _ \\ /    \\   /  \\ /  \\|  |  \\/  ___/  |/ /
   |        \\|  |_(  <_> )   |  \\ /    Y    \\  |  /\\___ \\|    < 
  /_______  /|____/\\____/|___|  / \\____|__  /____//____  >__|_ \\
          \\/                  \\/          \\/           \\/     \\/`;
  let billTitle = `
  __________.__.__  .__      ________        __                 
  \\______   \\__|  | |  |    /  _____/_____ _/  |_  ____   ______
   |    |  _/  |  | |  |   /   \\  ___\\__  \\\\   __\\/ __ \\ /  ___/
   |    |   \\  |  |_|  |__ \\    \\_\\  \\/ __ \\|  | \\  ___/ \\___ \\ 
   |______  /__|____/____/  \\______  (____  /__|  \\___  >____  >
          \\/                       \\/     \\/          \\/     \\/ `;
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
  setInterval(() => {
    let sentence = tabSentence[Math.floor(Math.random() * tabSentence.length)];
    ft_typewriter(textAnim, sentence, 75);
    textAnim.innerHTML = "";
  }, 6000);
  ft_typewriter(document.querySelector(".elonLogo"), elonTitle, 6);
  ft_typewriter(document.querySelector(".billLogo"), billTitle, 6);
  setInterval(() => {
    document.querySelector("title").innerHTML =
      tabTitle[Math.floor(Math.random() * tabTitle.length)];
  }, 10000);
});
