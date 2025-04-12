document.getElementById("dogOrderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const owner = document.getElementById("ownerName").value;
  const dog = document.getElementById("dogName").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  const data = {
    owner,
    dog,
    item,
    quantity
  };

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'response.json', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      document.getElementById("confirmation").textContent = `${response.message} (${quantity} ${item}(s) for ${dog}, ordered by ${owner})`;

      document.getElementById("dogOrderForm").reset();
    } else if (xhr.readyState === 4) {
      alert('Form submission failed. Try again.');
    }
  };

  xhr.send();
  console.log(data);
});
