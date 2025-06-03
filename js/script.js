'use strict';

const d = document;
const $hero = d.getElementById('hero');
let listNames = `<div class="cards">`;
let img = "";

fetch('file.json')
  .then((res) => res.json())
  .then((info) => {
    for (let i = 0; i < info.length; i++) {
      img = `<img class="card_img"  src="https://github.com/${info[i].usernameGithub}.png" alt="Profile Photo from ${info[i].usernameGithub}" width="234px">`
      listNames += `
        <div class="card">
        <h3>${info[i].student}</h3><p>Code: ${info[i].code}<br>
        ${img}<br>
        <p>Intensity: ${info[i].intensity}<br>  
        <a class="button" target="_blank" href="https://github.com/${info[i].usernameGithub}">${info[i].usernameGithub}</a>
        </div>
        `;
    }
    listNames += `</div>`;
    $hero.innerHTML = listNames;
  })
  .catch((err) => {
    console.log('error:', err);
  });

function failedImg() {
}