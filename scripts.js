function openModal(image) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-image").src = image.src;
    document.getElementById("caption").innerHTML = image.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
