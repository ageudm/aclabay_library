/* **************
    METODO SELECTOR
********************* */
// Metodo para selecionar um elemento
function $(selector) {
    const selectElem = document.querySelector(`${selector}`);
    if (selectElem) {
      return selectElem;
    }
  
    throw new Error(
      `Ops, "${selector}" Este selector não exite`
    );
  }
  
  
  // Metodo para selecioar varios elementos
  function $$(selector) {
    const selectElem = document.querySelectorAll(`${selector}`);
    if (selectElem) {
      return selectElem;
    }
  
    throw new Error(
      `Ops, "${selector}" Este selector não exite`
    );
  }

  export {$, $$};
