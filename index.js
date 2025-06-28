function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}

// Load header and footer when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    loadHTML('header', './public/header.html');
    loadHTML('footer', './public/footer.html');
});


// placeholder buttons
let all_btn = document.querySelectorAll('button');

for (let i = 0; i < all_btn.length; i++) {

    if (all_btn[i].id === "contact-btn-about") {
        all_btn[i].addEventListener('click', () => {
            window.location.href = './contact.html'
        });
    }
    else {
        all_btn[i].addEventListener('click', () => {
            window.location.href = './coming-soon.html';
        });
    }
}


