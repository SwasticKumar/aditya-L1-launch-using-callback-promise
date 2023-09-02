let promiseObj = new Promise((resolve, reject) => {
  console.log("Engine STARTED");
  setTimeout(() => {
    resolve(" Mission Aditya-L1");
    reject("Mission Failed");

    // setTimeout(() => {
      let stars = () => {
        let count = 20;
        let scene = document.querySelector(".scene");
        for (let i = 0; i < count; i++) {
          let star = document.createElement("i");
          let x = Math.floor(Math.random() * window.innerWidth);
          let duration = Math.random() * 1;
          let h = Math.random() * 100;

          star.style.left = x + "px";
          star.style.width = 1 + "px";
          star.style.height = 50 + h + "px";
          star.style.animationDuration = duration + "s";
          scene.appendChild(star);
        }
      };
      stars();
      promiseObj.then(() => {
        console.log("Spacecraft launched successfully");
      });
    }, 5000);
//   }, 100);
 
});


console.log(promiseObj);
