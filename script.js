const topDiv = document.querySelector(".top");


// const readout = document.querySelector("p");

topDiv.addEventListener("mousemove", (e) => {
    const { x, y } = topDiv.getBoundingClientRect();
    topDiv.style.setProperty("--x", e.clientX - x);
    topDiv.style.setProperty("--y", e.clientY - y);
});