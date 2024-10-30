// ========================================================================
// Prima versione
// ========================================================================
function myCreateElement1(tagnName, classList = [], content = "") {
    // Creo l'elemento
    const el = document.createElement(tagnName);
  
    // Aggiungo le classi
    if (classList.length > 0) {
      el.classList.add(...classList);
    }
  
    // Contenuto
    el.innerHTML = content;
    return el;
  }
  
  // Esempio di creazione di un tag
  const titleEl = myCreateElement1("h1", ["display-3"], "Crepes");
  first.appendChild(titleEl);
  
  // Esempio di creazione di una lista
  const ulEl = myCreateElement1("ul");
  const ingredienti = [
    "uova",
    "latte",
    "farina",
    "burro",
    "nutella",
    "zucchero a velo",
  ];
  ingredienti.forEach((ingrediente) => {
    const ingredienteEl = myCreateElement1("li", [], ingrediente);
    ulEl.appendChild(ingredienteEl);
  });
  first.appendChild(ulEl);