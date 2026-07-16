const user = "Wibbinho";
const repo = "tv-bwg-galerie";
const folder = "bilder";

fetch(`https://api.github.com/repos/${user}/${repo}/contents/${folder}`)
.then(r => r.json())
.then(files => {

    files = files
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f.name))

        // Neueste zuerst (GitHub-Dateien haben ein Datum im Namen oder werden alphabetisch sortiert)
        .sort((a,b)=>b.name.localeCompare(a.name))

        // Nur 24 Bilder
        .slice(0,24);

    const gallery = document.getElementById("gallery");

    files.forEach(file=>{

        gallery.innerHTML += `
            <div class="gallery-item">
                <img
                    src="${file.download_url}"
                    loading="lazy"
                    data-full="${file.download_url}"
                    alt="">
            </div>
        `;

    });

});

</script>
