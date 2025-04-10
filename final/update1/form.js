document.getElementById("dogOrderForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    fetch("response.json")
      .then((response) => response.json())
      .then((data) => {
        const owner = document.getElementById("ownerName").value;
        const dog = document.getElementById("dogName").value;
        const item = document.getElementById("item").value;
        const quantity = document.getElementById("quantity").value;
  
        const confirmation = document.getElementById("confirmation");
        confirmation.textContent = `${data.message} (${quantity} ${item}(s) for ${dog}, ordered by ${owner})`;
  
        console.log ={
          owner,
          dog,
          item,
          quantity,
        }
        document.getElementById("dogOrderForm").reset();
      })
      .catch((error) => {
        console.error("Error fetching response.json:", error);
        document.getElementById("confirmation").textContent = "Something went wrong. Please try again later.";
      });
  });