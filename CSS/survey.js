<script> 
  // JavaScript code to validate form 
  const form = document.querySelector('form'); 
  form.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    const name = document.getElementById('name').value; 
    const position = document.getElementById('position').value; 
    const yearsEmployed = document.getElementById('years_employed').value; 
    const salary = document.getElementById('salary').value; 
    const satisfaction = document.getElementById('satisfaction').value; 
    const suggestions = document.getElementById('suggestions').value; 

    if (name === '' || position === '' || yearsEmployed === '' || salary === '' || satisfaction === '' || suggestions === '') { 
      alert('Please fill out all fields'); 
    } else { 
      alert('Form submitted successfully!'); 
    } 
  }); 
</script>
