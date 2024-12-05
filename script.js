document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector(".image-container");
    const zones = document.querySelectorAll(".tooltip");

    // Événement de déplacement de la souris
    imageContainer.addEventListener("mousemove", (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Zone 1
        if (x > 150 && x < 250 && y > 50 && y < 150) {
            displayTooltip(zones[0], x, y);
        } else if (x > 300 && x < 400 && y > 200 && y < 300) { // Zone 2
            displayTooltip(zones[1], x, y);
        } else if (x > 100 && x < 200 && y > 300 && y < 380) { // Zone 3
            displayTooltip(zones[2], x, y);
        } else {
            hideAllTooltips();
        }
    });

    // Fonction d'affichage des tooltips
    function displayTooltip(tooltip, x, y) {
        hideAllTooltips();
        tooltip.style.display = "block";
        tooltip.style.left = `${x + 15}px`;
        tooltip.style.top = `${y + 15}px`;
    }

    // Fonction pour masquer toutes les tooltips
    function hideAllTooltips() {
        zones.forEach(zone => {
            zone.style.display = "none";
        });
    }
});
