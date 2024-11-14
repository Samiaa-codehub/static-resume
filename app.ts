document.addEventListener("DOMContentLoaded", () => {
    var toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsfieldest = document.getElementById("skills") as HTMLElement;
    

    toggleButton.addEventListener("click", () =>{
        if(skillsfieldest.style.display === "none"){
            skillsfieldest.style.display = "block";
            toggleButton.textContent = "Hide Skills Section";

        }else{
            skillsfieldest.style.display = "none";
            toggleButton.textContent = "Show skills Section";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    var toggleButton = document.getElementById("toggle-Personals") as HTMLButtonElement;
    const PersonalsSection = document.getElementById("Personals") as HTMLElement;
    

    toggleButton.addEventListener("click", () =>{
        if(PersonalsSection.style.display === "none"){
            PersonalsSection.style.display = "block";
            toggleButton.textContent = "Hide Personal Section";

        }else{
            PersonalsSection.style.display = "none";
            toggleButton.textContent = "Show Personal Section";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    var toggleButton = document.getElementById("toggle-eduaction") as HTMLButtonElement;
    const eduactionSection = document.getElementById("eduaction") as HTMLElement;
    

    toggleButton.addEventListener("click", () =>{
        if(eduactionSection.style.display === "none"){
            eduactionSection.style.display = "block";
        toggleButton.textContent = "Hide  qualification Section";

        }else{
            eduactionSection.style.display = "none";
            toggleButton.textContent = "Show  Qualification Section";
        }
    });
});