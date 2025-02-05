export class ToDo extends EventTarget {
  
  constructor(titel, erledigt) {
    super();
    this.titel = titel;
    this.erledigt = erledigt;
  }

  element() {
    const listElement = document.createElement('li');
    const divElement = document.createElement('div');
    const checkboxElement = document.createElement('input');
    const spanElement = document.createElement('span');
    const buttonElement = document.createElement('button');

    listElement.appendChild(divElement);

    divElement.appendChild(checkboxElement);
    divElement.appendChild(spanElement);
    divElement.appendChild(buttonElement);

    checkboxElement.setAttribute('type', 'checkbox');

    buttonElement.className = 'loeschen';

    spanElement.innerText = this.titel;
    buttonElement.innerText = 'Löschen';

    if (this.erledigt) {
      checkboxElement.setAttribute('checked', 'checked');
      divElement.className = 'erledigt';
    }

    buttonElement.addEventListener('click', () => {
      this.dispatchEvent(new Event('loeschen'));
    });
    // EventListener für das "change"-Event der Checkbox.
    // Dieser wird immer ausgelöst, wenn die Checkbox aktiviert oder deaktiviert wird.
    checkboxElement.addEventListener('change', () => {
      // Status für erledigt-Eigenschaft
      this.erledigt = checkboxElement.checked;

      this.dispatchEvent(new Event('erledigt'));
    });

    return listElement;
  }
}
