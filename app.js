/*const persona = {
  nombre: "Juana Banana",
  edad: 23,
  puesto: "Tech Lead",
  foto: "https://st2.depositphotos.com/1010613/48065/i/1600/depositphotos_480652086-stock-photo-african-american-woman-programmer-girl.jpg",
};
const { nombre, edad, puesto, foto } = persona;
const contenedorEL = document.querySelector(".contenedor");

const credencial = document.createElement("div");
credencial.style.border = "1px solid black";
credencial.style.padding = "12px";
credencial.style.width = "200px";
credencial.style.textAlign = "center";
credencial.style.borderRadius = "16px";

const image = document.createElement("img");
image.src = foto;
image.style.borderRadius = "50%";
image.style.height = "60px";
image.style.width = "60px";

const nombreEmpleado = document.createElement("h3");
nombreEmpleado.textContent = nombre;

const info = document.createElement("p");
info.textContent = `edad: ${edad} | puesto: ${puesto}`;

credencial.appendChild(image);
credencial.appendChild(nombreEmpleado);
credencial.appendChild(info);

console.log(contenedorEL.appendChild(credencial));
*/

const productos = [
  {
    id: 1,
    nombre: "Camiseta",
    precio: 19.99,
    stock: 25,
  },
  {
    id: 2,
    nombre: "Pantalón",
    precio: 34.99,
    stock: 15,
  },
  {
    id: 3,
    nombre: "Zapatos",
    precio: 59.99,
    stock: 10,
  },
  {
    id: 4,
    nombre: "Gorra",
    precio: 14.99,
    stock: 30,
  },
  {
    id: 5,
    nombre: "Chaqueta",
    precio: 89.99,
    stock: 5,
  },
];

const contenedeorEl = document.getElementById("productos");

for (const { nombre, precio, stock } of productos) {
  contenedeorEl.innerHTML += `
    <div class="card">
        <img src="" alt="">
        <h4>${nombre}</h4>
        <p>$${precio}</p>
    </div>
    `;
}
