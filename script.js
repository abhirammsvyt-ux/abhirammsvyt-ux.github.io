let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Contact form submission via Web3Forms (no backend needed)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('input[type="submit"]');
        const originalBtnValue = submitBtn.value;

        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        formStatus.textContent = '';

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formStatus.style.color = 'limegreen';
                    formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    contactForm.reset();
                } else {
                    formStatus.style.color = 'var(--main-color)';
                    formStatus.textContent = 'Something went wrong. Please try again.';
                }
            })
            .catch(() => {
                formStatus.style.color = 'var(--main-color)';
                formStatus.textContent = 'Something went wrong. Please try again.';
            })
            .finally(() => {
                submitBtn.value = originalBtnValue;
                submitBtn.disabled = false;
            });
    });
}