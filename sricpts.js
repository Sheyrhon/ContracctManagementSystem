// window.addEventListener('load', function() {
//   const contracts = JSON.parse(localStorage.getItem('contracts')) || [];
//   contracts.forEach(function(contract) {
//       renderContract(contract);
//   });
// });

function handleForm(event) {
  event.preventDefault();
  const title = document.getElementById("contract_title").value;
  const date = document.getElementById("effective_date").value;
  const parties = document.getElementById("parties_involved").value;
  const type = document.getElementById("contract_type").value;
  const duration = document.getElementById("contract_duration").value;
  const confClause = document.getElementById("checkbox").checked;
  const file = document.getElementById("file").value;
  console.log(title, date, parties, type, duration, confClause, file);
  // contract object
  const contract = {
    title,
    date,
    parties,
    type,
    duration,
    confClause,
    file,
  };
  renderContract(contract);
  // form.reset();
  document.getElementById("form_l").reset();
}

function renderContract(contract) {
  // const contracts = JSON.parse(localStorage.getItem('contracts')) || [];
  // contracts.push(contract);
  // localStorage.setItem('contracts', JSON.stringify(contracts));
  
  const contractList = document.getElementById("contract_list");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <strong>Title:</strong> ${contract.title}<br>
        <strong>Date:</strong> ${contract.date}<br>
        <strong>Parties:</strong> ${contract.parties}<br>
        <strong>Type:</strong> ${contract.type}<br>
        <strong>Duration:</strong> ${contract.duration}<br>
        <strong>Confidentiality Clause:</strong> ${
          contract.confidentialityClause ? "Yes" : "No"
        }<br>
        <strong>File:</strong> ${contract.file ? "Uploaded" : "Not Uploaded"}
        <button class = "delete_btn">Delete</button>
  `;
  contractList.appendChild(listItem)
  const deleteButton = listItem.querySelector('.delete_btn');
    deleteButton.addEventListener('click', function () {
        contractList.removeChild(listItem); 
    });
}


