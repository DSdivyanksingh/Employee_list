function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData)
}
function readFormData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["mobile"]=document.getElementById("mobile").value;
    formData["email"]=document.getElementById("email").value;
    return formData

}

function insertNewRecord(data){
    var table=document.getElementById("employeeList");
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=`<h3>Name </h3>`
    cell1=newRow.insertCell(1);
    cell1.innerHTML=data.name
    cell2=newRow.insertCell(2);
    cell2.innerHTML=`<h3>Mobile No. </h3>`
    cell2=newRow.insertCell(3);
    cell2.innerHTML=data.mobile
    cell3=newRow.insertCell(4);
    cell3.innerHTML=`<h3>Email</h3>`
    cell3=newRow.insertCell(5);
    cell3.innerHTML=data.email
    cell3=newRow.insertCell(6);
    cell3.innerHTML=`<button type="button" onClick="onDelete(this)">Delete</button>`
}

function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("mobile").value="";
    document.getElementById("email").value="";
}

function onDelete(td){
    row=td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}