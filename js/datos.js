//console.log('activo');
fetch('/json/datos.json')
.then((response) => response.json())
.then((data) => {
    const datosContainer = document.getElementById("datosContainer");
    console.log(datosContainer);

    if (Array.isArray(data.datos)) {
        data.datos.forEach((datos) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4");
  
          const image = document.createElement("img");
          image.src = datos.imagen;
          image.classList.add("card-img-top");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = datos.titulo;
  
          const contenido = document.createElement("p");
          contenido.classList.add("card-text");
          contenido.textContent = datos.contenido;
          datosContainer.appendChild(card);
          card.appendChild(cardBody);
           
          card.appendChild(image);
          cardBody.appendChild(title);
          cardBody.appendChild(contenido);
          
        });
      } else {
        console.error("Error en el Tipo de Datos");
      }
    })
    .catch((error) => console.error(error));
