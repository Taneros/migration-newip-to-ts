import './overlay.css'

export const overay = {

  openNav() {
    const overlayNews = document.getElementById("overlayNews") as HTMLElement;
    overlayNews.style.height="max-content";
  },

  closeNav() {
    const overlayNews = document.getElementById("overlayNews") as HTMLElement;
    overlayNews.style.height="0%";
  }

}

