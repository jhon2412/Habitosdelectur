//console.log('activo');
fetch("/json/consejos.json")
.then((response) => response.json())
.then((data) => {
    const consejoContainer = document.getElementById("consejoContainer");
     //console.log(consejoContainer);

    if (Array.isArray(data.consejos)) {
        data.consejos.forEach((consejo) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = consejo.titulo;
  
          const sugerencia = document.createElement("p");
          sugerencia.classList.add("card-text");
          sugerencia.textContent = consejo.sugerencia;
  
          consejoContainer.appendChild(card);
          card.appendChild(cardBody);
           
          cardBody.appendChild(title);
          cardBody.appendChild(sugerencia);
        });
      } else {
        console.error("Error en el Tipo de Datos");
      }
    })
    .catch((error) => console.error(error));