'use strict';

const d = document;
const $index = d.getElementById('hero');
let listNames = `<div class="cards">`;
const failedImage = './assets/failImg.png'

function showStudents() {
  fetch('file.json')
    .then((res) => res.json())
    .then((info) => {
      const data = info; 
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const user = data[i].usernameGithub;
        const srcImg = user ? `https://github.com/${user}.png` : failedImage;
        const secondProject = data[i].projects[1].score;
        const secondProjectAverage = secondProject.reduce((sum, val) => sum + val, 0);
        const showGit = 
        listNames += `
        <div class="card">
        <h2>${data[i].student}</h2><p>Code: ${data[i].code}<br>
        <img class="card_img"  src="${srcImg}" alt="Profile Photo from ${data[i].usernameGithub}" width="50%"><br>
        <p>Intensity: ${data[i].intensity}<br>  
        <div id="project">
        <h3>Projects</h3>
        <p><strong>First Project:</strong> ${data[i].projects[0].name}</p>
        <p><strong>Grade:</strong> ${data[i].projects[0].score}/5</p><br>
        <p><strong>Second Project:</strong> ${data[i].projects[1].name}</p>
        <p><strong>Grade:</strong> ${secondProjectAverage}/10</p><br>
        </div>
        <a id="profile" class="button" target="_blank" href="https://github.com/${data[i].usernameGithub}">${data[i].usernameGithub}</a>
        </div>
        `;
      }
      listNames += `</div>`;
      $index.innerHTML = listNames;
    })
    .catch((err) => {
      console.log('error:', err);
    });
}
showStudents();