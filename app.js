document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    toggleButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills Section";
        }
        else {
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show skills Section";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-Personals");
    var PersonalsSection = document.getElementById("Personals");
    toggleButton.addEventListener("click", function () {
        if (PersonalsSection.style.display === "none") {
            PersonalsSection.style.display = "block";
            toggleButton.textContent = "Hide Personal Section";
        }
        else {
            PersonalsSection.style.display = "none";
            toggleButton.textContent = "Show Personal Section";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-eduaction");
    var eduactionSection = document.getElementById("eduaction");
    toggleButton.addEventListener("click", function () {
        if (eduactionSection.style.display === "none") {
            eduactionSection.style.display = "block";
            toggleButton.textContent = "Hide  qualification Section";
        }
        else {
            eduactionSection.style.display = "none";
            toggleButton.textContent = "Show  Qualification Section";
        }
    });
});
