const form = document.getElementById("myForm");
let container = document.getElementById("container");

form.addEventListener("submit", (event) => {

    let name = event.target.name.value;
    let age = event.target.age.value;
    let drinkMod_cold = event.target.drinkMod_cold.checked ? event.target.drinkMod_cold.value : "";
    let drinkMod_hot = event.target.drinkMod_hot.checked ? event.target.drinkMod_hot.value : "";
    let drinkType = event.target.drinkType.value;

    event.preventDefault();
    
    render(name, age, drinkType, drinkMod_cold, drinkMod_hot);
});

function render(name, age, drinkType, drinkMod_hot, drinkMod_cold) {

    let render_name = document.createElement('p');
    let render_age = document.createElement('p');
    let render_drinkMod_hot = document.createElement('p');
    let render_drinkMod_cold= document.createElement('p');
    let render_drinkType = document.createElement('p');
    let hr = document.createElement('hr');

    render_name.textContent = name;
    render_age.textContent = age;
    render_drinkMod_hot.textContent = drinkMod_hot;
    render_drinkMod_cold.textContent = drinkMod_cold;
    render_drinkType.textContent = drinkType;

    container.appendChild(render_name);
    container.appendChild(render_age);

    container.appendChild(render_drinkMod_cold);
    container.appendChild(render_drinkMod_hot);

    container.appendChild(render_drinkType);
    container.appendChild(hr);
}




