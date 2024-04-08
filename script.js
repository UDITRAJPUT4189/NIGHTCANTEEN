window.onscroll = () =>{
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
        
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();



document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fullName = document.getElementById('signup-full-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var phone = document.getElementById('signup-phone').value;
    var address = document.getElementById('signup-address').value;
    var city = document.getElementById('signup-city').value;
    var zipcode = document.getElementById('signup-zipcode').value;
  
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '' || 
        phone.trim() === '' || address.trim() === '' || city.trim() === '' || 
        zipcode.trim() === '') {
      document.getElementById('signup-message').textContent = 'Please fill in all fields.';
      return;
    }
  
    document.getElementById("signup-message").textContent = 'Signup successful! Redirecting...';
  
    setTimeout(function() {
      window.location.href = 'home.html';
    }, 2000);
});
  

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var fullName = document.getElementById('login-full-name').value;
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;

  if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      document.getElementById('login-message').textContent = 'Please fill in all fields.';
      return;
  }

  document.getElementById('login-message').textContent = 'Login successful! Redirecting...';

  setTimeout(function() {
    console.log('Form submitted');
      window.location.href = 'home.html';
  }, 2000);
});

  
  
document.addEventListener("DOMContentLoaded", function() {
  const orderButton = document.getElementById("Order-now");

  orderButton.addEventListener("click", function(event) {
      event.preventDefault(); 
      console.log("Button clicked!");
      alert("Your order has been placed!");
  });
});


