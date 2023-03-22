const form = document.getElementById("myForm");
let container = document.getElementById("container");

form.addEventListener("submit", (event) => {

    let name = event.target.name.value;
    let age = event.target.age.value;
    let drinkMod = event.target.drinkMod.value;
    let drinkType = event.target.drinkType.value;

    event.preventDefault();

    render(name, age, drinkType, drinkMod);
});

function render(name, age, drinkMod, drinkType) {

    let render_name = document.createElement('p');
    let render_age = document.createElement('p');
    let render_drinkMod = document.createElement('p');
    let render_drinkType = document.createElement('p');
    let hr = document.createElement('hr');

    render_name.textContent = name;
    render_age.textContent = age;
    render_drinkMod.textContent = drinkMod;
    render_drinkType.textContent = drinkType;

    container.appendChild(render_name);
    container.appendChild(render_age);
    container.appendChild(render_drinkMod);
    container.appendChild(render_drinkType);
    container.appendChild(hr);
}




