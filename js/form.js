// contact form validation/submission
window.onload = function () {
    emailjs.init({
      publicKey: "HdvBc2pWqIX3HddeG",
    });
  
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', send_email);
};
  
async function send_email(event) {
    event.preventDefault(); 
    try {
      await emailjs.sendForm('service_752m2gc', 'template_ucy59cm', event.target);
      alert('email sent.');
      event.target.reset(); 
    } catch (error) {
      console.error('email not sent:', error);
      alert('email not sent.');
    }
}