document.addEventListener("DOMContentLoaded", function () {
    const existingContracts = JSON.parse(localStorage.getItem("contracts")) || [];
  
    function handleFormSubmit(event, contracts) {
      event.preventDefault();
      const title = document.getElementById("contract_title").value;
      const date = document.getElementById("effective_date").value;
      const parties = document.getElementById("parties_involved").value;
      const type = document.getElementById("contract_type").value;
      const duration = document.getElementById("contract_duration").value;
      const confClause = document.getElementById("conf_clause").checked;
      const file = document.getElementById("contract_file").value;
  
      const newContract = {
        title,
        date,
        parties,
        type,
        duration,
        confClause,
        file
      };
      contracts.push(newContract);
      localStorage.setItem("contracts", JSON.stringify(contracts));
  
      form.reset();
      renderContracts(contracts);
    }
  
    function renderContracts(contracts) {
      const contractList = document.getElementById("contract_list");
      contractList.innerHTML = "";
      contracts.forEach((contract, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = contract.title;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
          deleteContract(index);
        });
  
        listItem.appendChild(deleteButton);
        contractList.appendChild(listItem);
      });
    }
  
    function deleteContract(index) {
      existingContracts.splice(index, 1);
      localStorage.setItem("contracts", JSON.stringify(existingContracts));
      renderContracts(existingContracts);
    }
  
    const form = document.getElementById("contract_form");
    form.addEventListener("submit", function (event) {
      handleFormSubmit(event, existingContracts);
    });
  
    renderContracts(existingContracts);
  });