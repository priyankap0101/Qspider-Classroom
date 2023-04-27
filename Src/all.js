 //method to get all data
 function allData(){
            
    table.innerHTML = ``
    
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []



    //looping data and show data in table
    contactList.forEach(function (value, i){
       
        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.topicname}</td>
                <td>${value.description}</td>
                <td>${value.myfile}</td>
                
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                    <br>
                    <br>
                   <a href =""  download<button class="btn btn-sm btn-success" onclick="downloadFile(${value.id})">
                        <i class="fa fa-download"></i>
                    </button></a>
                </td>   
                
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
    })
}
