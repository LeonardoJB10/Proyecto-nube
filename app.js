document.addEventListener("DOMContentLoaded", () => {
  const btnDemo = document.getElementById("btn-demo");
  const statusEl = document.getElementById("demo-status");

  if (btnDemo && statusEl) {
    btnDemo.addEventListener("click", () => {
      const now = new Date().toLocaleString("es-MX");
      statusEl.textContent = `Flujo verificado (${now}): ramas Git y despliegue en Azure Static Web Apps listos.`;
    });
  }
});