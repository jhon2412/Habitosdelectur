const xhr=new XMLHttpRequest();
//console.log(xhr);
xhr.open("GET", "./xml/menu.xml", true);

xhr.onload = function() {
    if (xhr.status === 200) {
        const xmlDoc = xhr.responseXML;
        const items = xmlDoc.getElementsByTagName("item");
        let menuHTML="";
        for (let i = 0; i < items.length; i++) {
            const nombre = items[i].getElementsByTagName("nombre")[0].textContent;
            const link = items[i].getElementsByTagName("link")[0].textContent;
            menuHTML+=`
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${link}">${nombre}</a>
                </li>
                `;
        }
        document.getElementById("menu").innerHTML=menuHTML;
    }
    else {
        console.error("Error");
    }
};
xhr.send();