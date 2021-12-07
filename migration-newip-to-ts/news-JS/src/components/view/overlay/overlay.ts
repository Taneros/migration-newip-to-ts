

export const overay = {

  openNav() {
    const myNavEl = document.getElementById("myNav") as HTMLElement;
    myNavEl.style.height="max-content";
  },

  closeNav() {
    const myNavEl = document.getElementById("myNav") as HTMLElement;
    myNavEl.style.height="0%";
  }

}

