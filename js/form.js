// contact form validation/submission
window.onload = function () {
    emailjs.init({
      publicKey: "cn8V8gjTY22xvh7_-",
    });
  
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', send_email);
};
  
async function send_email(event) {
    event.preventDefault(); 
    try {
      await emailjs.sendForm('service_n1wrsw4', 'template_4pg2qd7', event.target);
      alert('email sent.');
      event.target.reset(); 
    } catch (error) {
      console.error('email not sent:', error);
      alert('email not sent.');
    }
}
  
