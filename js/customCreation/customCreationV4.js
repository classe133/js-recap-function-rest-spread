// ========================================================================
// Quarta versione, aggiungo una callback per le customizzazioni
// ========================================================================
function myCreateElement4(
    tagnName,
    classList = [],
    content = [],
    callback = false
  ) {
    // Creo l'elemento
    const el = document.createElement(tagnName);
  
    // Aggiungo le classi
    if (classList.length > 0) {
      el.classList.add(...classList);
    }
  
    // Esegui la callback passando l'elemento
    if (callback) {
      callback(el);
    }
  
    // Contenuto
    if (Array.isArray(content)) {
      for (let i = 0; i < content.length; i++) {
        el.appendChild(content[i]);
      }
    } else if (content instanceof HTMLElement) {
      el.appendChild(content);
    } else if (typeof content === "string") {
      el.innerHTML = content;
    } else {
      console.error("Non posso aggiungere l'elemento");
    }
    return el;
  }
  
  const card4 = myCreateElement4("div", ["card"],
    [
      myCreateElement4("img", ["card-image-top"], [],
        (el) => (el.src = "https://picsum.photos/id/237/200/300")
      ),
      myCreateElement4("div", ["card-body"], [
          myCreateElement4("h5", ["card-title"], "Card Title"),
          myCreateElement4("p", ["card-text"], "Some quick example text to build on the card title and make up the bulk of the card's content."),
          myCreateElement4("a", ["btn", "btn-primary"], "Go Somewhere", (el) => {
            el.href = "#";
            el.addEventListener("click", (event) => {
              event.preventDefault();
              console.log("click");
            });
          }),
        ]
      ),
    ]
  );
  forth.appendChild(card4);