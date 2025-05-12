//console.log('activo');
fetch("./json/fqs.json")
.then((response) => response.json())
.then((data) => {
    const fqsContainer = document.getElementById("fqscontainer");
     //console.log(consejoContainer);

    if (Array.isArray(data.fqs)) {
        data.fqs.forEach((fqss) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = fqss.titulo;
  
          const sugerencia = document.createElement("p");
          sugerencia.classList.add("card-text");
          sugerencia.textContent = fqss.sugerencia;
  
          fqsContainer.appendChild(card);
          card.appendChild(cardBody);
           
          cardBody.appendChild(title);
          cardBody.appendChild(sugerencia);
        });
      } else {
        console.error("Error en el Tipo de Datos");
      }
    })
    .catch((error) => console.error(error));