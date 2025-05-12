//console.log('activo');

fetch("./json/libros.json")
.then((response) => response.json())
.then((data) => {
    const librosContainer = document.getElementById("libroscontainer");
    //console.log(librosContainer);

    if (Array.isArray(data.libros)) {
        data.libros.forEach((libro) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4");
  
          const image = document.createElement("img");
          image.src = libro.imagen;
          image.classList.add("card-img-top");
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = libro.titulo;
  
          const autor = document.createElement("p");
          autor.classList.add("card-text");
          autor.textContent = `Autor: ${libro.autor}`;
  
          const editorial = document.createElement("p");
          editorial.classList.add("card-text");
          editorial.textContent = `Editorial: ${libro.editorial}`;
  
          const gestion = document.createElement("p");
          gestion.classList.add("card-text");
          gestion.textContent = `Gestion: ${libro.gestion}`;
  
          const paginas = document.createElement("p");
          paginas.classList.add("card-text");
          paginas.textContent = `Paginas: ${libro.paginas}`;
  
          librosContainer.appendChild(card);
          card.appendChild(cardBody);
           
          card.appendChild(image);
          cardBody.appendChild(title);
          cardBody.appendChild(autor);
          cardBody.appendChild(editorial);
          cardBody.appendChild(gestion);
          cardBody.appendChild(paginas);
        });
      } else {
        console.error("Error en el Tipo de Datos");
      }
    })
    .catch((error) => console.error(error));