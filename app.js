document.addEventListener("DOMContentLoaded", () => {
  let tabTitle = ["Magic CVs", "So cooool !"];
  let logoFT = `
       ###    ####          ######   ######  #####      ####  #######    ####   ######
      ####   ##  ##        ##  ##   ##  ##  ##   ##      ##    ##   #   ##  ##  # ## #
     ## ##       ##        ##  ##   ##  ##  ##   ##      ##    ## #    ##         ##
    ##  ##     ###         #####    #####   ##   ##      ##    ####    ##         ##
    #######   ##           ##       ## ##   ##   ##  ##  ##    ## #    ##         ##
        ##   ##  ##        ##       ##  ##  ##   ##  ##  ##    ##   #   ##  ##    ##
        ##   ######        ####     #### ##  #####    ####    #######    ####    ####`;
  let partiesText = `
        ____   __    ____  ____  ____  ____  ___ 
       (  _ \\ /__\\  (  _ \\(_  _)(_  _)( ___)/ __)
        )___//(__)\\  )   /  )(   _)(_  )__) \\__ \\
       (__) (__)(__)(_)\\_) (__) (____)(____)(___/`;
  let plusText = `
        ____  __    __  __  ___       
       (  _ \\(  )  (  )(  )/ __)      
        )___/ )(__  )(__)( \\__ \\      
       (__)  (____)(______)(___/()()()`;
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
  ft_typewriter(document.querySelector(".ft_logo"), logoFT, 3);
  document.querySelectorAll(".title")[0].innerHTML = partiesText;
  document.querySelectorAll(".title")[1].innerHTML = plusText;

  setInterval(() => {
    document.querySelector("title").innerHTML =
      tabTitle[Math.floor(Math.random() * tabTitle.length)];
  }, 10000);

  document.querySelector(".quit").addEventListener("click", () => {
    window.close();
  });
});
