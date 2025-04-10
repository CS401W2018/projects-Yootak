document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
  
    if (!name || !email || !phone || !address) {
      alert("Please fill in all required fields: Name, Email, Phone, and Address.");
      return;
    }
  

  
    const formData = {
      name,
      email,
      phone,
      address,
    
    };
  
    console.log("Form Data Submitted:", formData);
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'response.json', true);
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.body.innerHTML = `<h2 style="text-align:center;">${response.message}</h2>`;
        document
    } else {
        alert('Form submission failed. Try again.');
      }
    };
  
    xhr.onerror = function () {
      alert("An error occurred while submitting the form.");
    };
  
    xhr.send();
  });