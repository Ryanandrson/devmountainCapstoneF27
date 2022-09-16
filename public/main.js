// function AddData() {
//     let rows = "";
//     let id = document.getElementById("id").value;
//     let name = document.getElementById("name").value;
//     let company = document.getElementById("company").value;
//     let phone = document.getElementById("phone").value;
//     let email = document.getElementById("email").value;
//     let status = document.getElementById("status").value;
//     let notes = document.getElementById("notes").value;
// }

function getClients() {
    axios.get("http://localhost:5500/api/clients/")
.then(res => {
    const data = res.data;
    for(let i = 0; i <data.length; i++){
            const client = data[i]

            var table = document.getElementById("clients-table");

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

            var cell1 = row.insertCell(0);
            cell1.innerHTML = client["id"]

            var cell2 = row.insertCell(1);
            cell2.innerHTML = client["name"];

            var cell3 = row.insertCell(2);
            cell3.innerHTML = client["company"];

            var cell4 = row.insertCell(3);
            cell4.innerHTML = client["phone"];

            var cell5 = row.insertCell(4);
            cell5.innerHTML = client["email"];

            var cell6 = row.insertCell(5);
            cell6.innerHTML = client["status"];

            var cell7 = row.insertCell(6);
            cell7.innerHTML = client["notes"];

    }
   
});
}
window.onload = getClients()




const submitBtn = document.getElementById("submit-btn")

const addClient = () => {
    
    const body = {
        // id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value,
        status: document.getElementById('status').value,
        notes: document.getElementById('notes').value,

    }
    axios.post("http://localhost:5500/api/client/", body)
        .then(res => {
            getClients()
            
    });
    console.log(body.name)
};

submitBtn.addEventListener('click', addClient)



//---------------------------------------------------------------------------------------------


const personForm = document.getElementById("person-form")

const postPerson = (event) => {
    event.preventDefault()
    // peopleSection.innerHTML =  ``

   const body = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        status: document.getElementById('status').value,
        notes: document.getElementById('notes').value,

    }
    axios.post("http://localhost:5500/api/person/", body)
    .then((response) => {
        const data = response.data;
        showPeopleOnDom(data)

    })
    .catch
};

// personForm.addEventListener('submit', postPerson)

// const deleteForm = document.getElementById('delete-form')
// const deleteInput = document.getElementById('delete-name')

// const deletePerson = (event) => {
//     event.preventDefault()
//     peopleSection.innerHTML =  ``

//     const name = deleteInput.value

//     axios.delete(`http://localhost:4000/api/delete/${name}`)
//     .then((response) => {
//         const data = response.data;
//         showPeopleOnDom(data)
//     })
// }

const showPeopleOnDom = (data) => {
    for(let i = 0; i < data.length; i++){
        let para = document.createElement('p')

       para.innerHTML =`
        <span class="name-text">${data[i].name}</span> has power <spanc lass= "power-text">${data[i].power}</span>
       `
       peopleSection.appendChild(para)
    }
}

const peopleSection = document.getElementById("people")


// personForm.addEventListener('submit', postPerson)
// deleteForm.addEventListener('submit', deletePerson)