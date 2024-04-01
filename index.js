function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Retrieve the new id value
      const userId = data.id;
      // Append it to the DOM
      const userIdElement = document.createElement('p');
      userIdElement.textContent = `New user ID: ${userId}`;
      document.body.appendChild(userIdElement);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
      // Append the error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
      return error;
    });
  }
  