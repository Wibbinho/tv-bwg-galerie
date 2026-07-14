fetch("galerie.json")
.then(r=>r.json())
.then(data=>{

const gallery=document.getElementById("gallery");

data.forEach(item=>{

gallery.innerHTML+=`

<a class="card" href="${item.link}" target="_blank">

<img src="${item.bild}">

<h3>${item.titel}</h3>

</a>

`;

});

});
