function showDescription(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function exploreNow() {
    alert('Exploring advanced tourism program!');
    // Implementasi lebih lanjut
}

function discoverMore() {
    alert('Discovering more regulations!');
    // Implementasi lebih lanjut
}

function subscribe(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    // Implementasi lebih lanjut
}

function openVisa() {
    alert('Opening E-Visa page!');
    // Implementasi lebih lanjut
}

function openGeneralInfo() {
    alert('Opening General Information page!');
    // Implementasi lebih lanjut
}

function visitWebsite(event) {
    if (select.value !== "Choose Website") {
        alert('Visiting ${selectedValue}!');
        // Implementasi lebih lanjut
    }
}