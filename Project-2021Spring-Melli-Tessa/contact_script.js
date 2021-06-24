function submitForm() {
   var form = document.getElementsByName('contactForm');
   form[0].submit(); // Submit
   form[0].reset();  // Reset form data
   return false;
}
