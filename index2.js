var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["nombreCompleto"] = document.getElementById("nombreCompleto").value;
    formData["cedula"] = document.getElementById("cedula").value;
    formData["celular"] = document.getElementById("celular").value;
    formData["direccion"] = document.getElementById("direccion").value;
    formData["fechaNac"] = document.getElementById("fechaNac").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    let table = document.getElementById("personaRegistro").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nombreCompleto;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.cedula;
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.celular;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.direccion;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.costo;
    let cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.fechaNac;
    let cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.email;
    let cell8 = newRow.insertCell(7);
        cell8.innerHTML = `<a href="#" onClick='onEdit(this)'>Editar</a>
                        <a href="#" onClick='onDelete(this)'>Borrar</a>`;
}

// To reset the data of fill input
function resetForm(){
    document.getElementById('nombreCompleto').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('fechaNac').value = '';
    document.getElementById('email').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nombreCompleto').value = selectedRow.cells[0].innerHTML;
    document.getElementById('cedula').value = selectedRow.cells[1].innerHTML;
    document.getElementById('celular').value = selectedRow.cells[2].innerHTML;
    document.getElementById('direccion').value = selectedRow.cells[3].innerHTML;
    document.getElementById('fechaNac').value = selectedRow.cells[4].innerHTML;
    document.getElementById('email').value = selectedRow.cells[5].innerHTML;    
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nombreCompleto;
    selectedRow.cells[1].innerHTML = formData.cedula;
    selectedRow.cells[2].innerHTML = formData.celular;
    selectedRow.cells[3].innerHTML = formData.direccion;
    selectedRow.cells[4].innerHTML = formData.fechaNac;
    selectedRow.cells[5].innerHTML = formData.email;
}
function onDelete(td){
    if(confirm('Está seguro que desea borrar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('personaRegistro').deleteRow(row.rowIndex);
        resetForm();
    }
}