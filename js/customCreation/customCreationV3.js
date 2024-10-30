// ========================================================================
// Terza versione, posso aggiungere più figli
// ========================================================================
function myCreateElement3(tagnName, classList = [], content = []) {
    // Creo l'elemento
    const el = document.createElement(tagnName);
  
    // Aggiungo le classi
    if (classList.length > 0) {
      el.classList.add(...classList);
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
  
  const card3 = myCreateElement3("div", ["card"], [
      myCreateElement3("div", ["card-body"],
        [
          myCreateElement3("h5", ["card-title"], "Card Title"),
          myCreateElement3("p", ["card-text"], "Some quick example text to build on the card title and make up the bulk of the card's content."),
          myCreateElement3("a", ["btn", "btn-primary"], "Go Somewhere"),
        ]
      ),
    ]
  );
  third.appendChild(card3);