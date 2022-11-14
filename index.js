function pisz(znak) {
  let wynik = document.getElementById("wynik").value;
  let space = " das ";

  if (znak == "backsp") {
    wynik = wynik.slice(-1);
  } else if (znak == "space") {
  } else {
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = wynik.innerText + znak;
  }
}
