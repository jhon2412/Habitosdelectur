//console.log('activo');
fetch('/json/extra.json')
.then((response) => response.json())
.then((data) => {
    const extraContainer = document.getElementById("extracontainer");
    //console.log(extraContainer);

    if (Array.isArray(data.extra)) {
        data.extra.forEach((extras) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4");
  
          const image = document.createElement("img");
          image.src = extras.image;
          image.classList.add("card-img-top");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = extras.titulo;
  
          const contenido = document.createElement("p");
          contenido.classList.add("card-text");
          contenido.textContent = extras.contenido;
          extraContainer.appendChild(card);
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