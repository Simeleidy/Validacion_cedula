function validarCedula() {
  let cedula = document.getElementById("cedula").value.trim();
  const resultado = document.getElementById("resultado");

  // Validar formato
  if (cedula.length !== 11 || isNaN(cedula)) {
    resultado.textContent = "❌ Cédula inválida. Debe tener 11 dígitos numéricos.";
    resultado.className = "incorrecta";
    return;
  }

  let suma = 0;

  for (let i = 0; i < 10; i++) {
    let digito = parseInt(cedula.charAt(i));
    let multiplicador = (i % 2 === 0) ? 1 : 2;
    let producto = digito * multiplicador;

    if (producto > 9) producto -= 9;

    suma += producto;
  }

  let digitoVerificador = parseInt(cedula.charAt(10));
  let residuo = suma % 10;
  let digitoCalculado = (residuo === 0) ? 0 : (10 - residuo);

  if (digitoCalculado === digitoVerificador) {
    resultado.textContent = "✅ CÉDULA ES CORRECTA";
    resultado.className = "correcta";
  } else {
    resultado.textContent = "❌ CÉDULA ES INCORRECTA";
    resultado.className = "incorrecta";
  }
}
