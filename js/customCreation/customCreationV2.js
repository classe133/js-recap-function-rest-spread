// ========================================================================
// Seconda versione, posso aggiungere anche un elemento figlio
// ========================================================================
function myCreateElement2(tagnName, classList = [], content = "") {
    // Creo l'elemento
    const el = document.createElement(tagnName);
  
    // Aggiungo le classi
    if (classList.length > 0) {
      el.classList.add(...classList);
    }
  
    // Contenuto
    if (content instanceof HTMLElement) {
      el.appendChild(content);
    } else if (typeof content === "string") {
      el.innerHTML = content;
    } else {
      console.error("Non posso aggiungere l'elemento", content, typeof content);
    }
    return el;
  }
  
  const card2 = myCreateElement2("div", ["card"],
    myCreateElement2("div", ["card-body"],
      myCreateElement2("div", ["card-text"], "Ciao sono una card")
    )
  );
  second.appendChild(card2);