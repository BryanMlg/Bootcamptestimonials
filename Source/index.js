const TanyaContainer = document.querySelector(".TanyaContainer");
const JohnContainer = document.querySelector(".JohnContainer");
const Prev = document.querySelector(".Prev");
const Next = document.querySelector(".Next");
const JPrev = document.querySelector(".JPrev");
const JNext = document.querySelector(".JNext");
Prev.addEventListener("click", Swap);
Next.addEventListener("click", Swap);
function Swap() {
  if (JohnContainer.classList.contains("Inactivo")) {
    JohnContainer.classList.remove("Inactivo");
    TanyaContainer.classList.add("Inactivo");
  } else if (TanyaContainer.classList.contains("Inactivo")) {
    TanyaContainer.classList.remove("Inactivo");
    JohnContainer.classList.add("Inactivo");
  } else {
    JohnContainer.classList.add("Inactivo");
  }
}
