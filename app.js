document.addEventListener("DOMContentLoaded", () => {
  let logoFT = `
       ###    ####          ######   ######  #####      ####  #######    ####   ######
      ####   ##  ##        ##  ##   ##  ##  ##   ##      ##    ##   #   ##  ##  # ## #
     ## ##       ##        ##  ##   ##  ##  ##   ##      ##    ## #    ##         ##
    ##  ##     ###         #####    #####   ##   ##      ##    ####    ##         ##
    #######   ##           ##       ## ##   ##   ##  ##  ##    ## #    ##         ##
        ##   ##  ##        ##       ##  ##  ##   ##  ##  ##    ##   #   ##  ##    ##
        ##   ######        ####     #### ##  #####    ####    #######    ####    ####`;
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
});
