/* eslint-disable max-len */
import FavoriteRestoIdb from '../../data/resto-idb';
// import restoCard from '../templates/resto-card';
import {createRestoItemTemplate} from '../templates/template-creator';


const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="title-container">Favorite Restaurant</h2>

        <section id="fav-resto"></section>
      </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestoIdb.getAllResto();

    const favRestoContainer = document.querySelector('#fav-resto');

    if (data.length === 0) {
      favRestoContainer.innerHTML = `
      <p>Add your favorite restaurant.</p>`;
    }

    data.forEach((resto) => {
      favRestoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
