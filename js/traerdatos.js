//  console.log('Activado');
const form = document.getElementById('formRegister');
const nameInput= document.getElementById('nameinput');
const emailInput= document.getElementById('emailinput');
const tableBody=document.getElementById('tablebody');

let data = JSON.parse(localStorage.getItem('formData'))|| [];
//console.log(formData)
   form.addEventListener('submit',function(event){

    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
   //console.log(name);
   //console.log(email);
    if(name && email)
       {  const newdata = {name,email};
           // console.log(newdata);
            data.push(newdata);
            saveDataToLocalStorage();
            renderTable();
           form.reset();
    }
    else{
        alert('Todos los datos son oblicatorios');
    }
})
function saveDataToLocalStorage() {

     localStorage.setItem('formData',JSON.stringify(data));

}
function renderTable(){ 
     
     tableBody.innerHTML = '';
         
    data.array.forEach(function(item,index)
    {    
        console.log(item,index);
        const row = document.createElement('tr');
        const namecell = document.createElement('td');
        const emailcell = document.createElement('td');
        const actioncell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        namecell.textContent = item.name;
        emailcell.textContent = item.email;
        editButton.textContent = 'Edit';
        deleteButton.textContent ='Delete';

        editButton.classList.add('button','button-secundary');
        deleteButton.classList.add('button','button-terciario');

        editButton.addEventListener('clic',function(){
            editData(index);
        })
        
        deleteButton.addEventListener('click',function(){
            deleteData(index);

        })
        actioncell.appendChild(editButton);
        actioncell.appendChild(deleteButton);

        row.appendChild(namecell);
        row.appendChild(emailcell);
        row.appendChild(actioncell)

        tableBody.appendChild(row);
    })
}
function editData(index){
    const item = data[index];
    nameInput.value = item.name;
    emailInput.value = item.email;
    data.splice(index,1);
    saveDataToLocalStorage();
    renderTable();
}
function deleteData(index){
    data.splice(index,1);
    saveDataToLocalStorage();
    renderTable();
}
renderTable();