$(function () { // wait for document ready
    emailjs.init('Qfoioc3SnBsKLWAIE');

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_v0m45wv', 'template_a0idkjw', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
});