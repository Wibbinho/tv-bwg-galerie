const user = "Wibbinho";
const repo = "tv-bwg-galerie";
const folder = "bilder";


fetch(`https://api.github.com/repos/${user}/${repo}/contents/${folder}`)

.then(response => response.json())

.then(files => {

const gallery = document.getElementById("gallery");


files
.filter(file => 
    file.name.match(/\.(jpg|jpeg|png|webp)$/i)
)
.forEach(file => {


gallery.innerHTML += `

<div class="card">

<img src="${file.download_url}">

</div>

`;


});


});
