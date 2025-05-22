const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

// Texto inicial de la terminal (con clases azules)
const initialTerminalContent = `
<div class="text-blue-300">> [BOOTING SEQUENCE...]</div>
<div class="text-blue-200">> User: Ignacio González</div>
<div class="text-blue-200">> Role: Full Stack Developer</div>
<div class="text-blue-200">> Skills: JavaScript, React, Node.js, Python, Angular...</div>
<div class="text-blue-200">> Hobbies: Videojuegos, programar, leer, deporte</div>
<div class="text-blue-300">> Si quieres saber más, escribe <span class="text-white">help</span>.</div>
`;

// Establecer contenido inicial
output.innerHTML = initialTerminalContent;

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        input.value = "";

        switch (command) {
            case "help":
                output.innerHTML += `<div class="text-blue-200">> Comandos disponibles: <span class="text-white">cv</span>, <span class="text-white">contacto</span>, <span class="text-white">sobre</span>, <span class="text-white">clear</span></div>`;
                break;
            case "cv":
                output.innerHTML += `<div class="text-blue-200">> Se está descargando el CV de Ignacio...</div>`;
                const link = document.createElement("a");
                link.href = "assests/doc/IGNACIO_GONZALEZ_LOPEZ_CV.pdf"; 
                link.download = "CV-Ignacio.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
            case "contacto":
                output.innerHTML += `<div class="text-blue-200">> Mi teléfono es: <span class="text-white">+34 639 35 96 52</span></div>`;
                output.innerHTML += `<div class="text-blue-200">> Mi correo es: <span class="text-white">nacho.gonzalez.lopez8@gmail.com</span></div>`;
                break;
            case "sobre":
                output.innerHTML += `<div class="text-blue-200">> Soy Ignacio, desarrollador full stack con foco en diseño moderno e interfaces atractivas.</div>`;
                break;
            case "clear":
                output.innerHTML = initialTerminalContent;
                break;
            default:
                output.innerHTML += `<div class="text-blue-200">> Comando desconocido: <span class="text-red-500">${command}</span>. Escribe <span class="text-white">help</span> para ver los comandos disponibles.</div>`;
        }

        output.scrollTop = output.scrollHeight;
    }
});