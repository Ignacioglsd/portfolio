const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const initialTerminalContent = `
<div class="text-blue-300">> [BOOTING SEQUENCE...]</div>
<div class="text-blue-200">> User: Ignacio González</div>
<div class="text-blue-200">> Role: Full Stack Developer</div>
<div class="text-blue-200">> Skills: JavaScript, React, Node.js, Python, Angular...</div>
<div class="text-blue-200">> Hobbies: Video games, coding, reading, sports</div>
<div class="text-blue-300">> If you want to know more, type <span class="text-white">help</span>.</div>
`;

output.innerHTML = initialTerminalContent;

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        input.value = "";

        switch (command) {
            case "help":
                output.innerHTML += `<div class="text-blue-200">> Available commands: <span class="text-white">cv</span>, <span class="text-white">contact</span>, <span class="text-white">about</span>, <span class="text-white">clear</span></div>`;
                break;
            case "cv":
                output.innerHTML += `<div class="text-blue-200">> Downloading Ignacio's CV...</div>`;
                const link = document.createElement("a");
                link.href = "assests/doc/IGNACIO_GONZALEZ_LOPEZ_CV.pdf"; 
                link.download = "CV-Ignacio.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
            case "contact":
                output.innerHTML += `<div class="text-blue-200">> My phone number is: <span class="text-white">+34 639 35 96 52</span></div>`;
                output.innerHTML += `<div class="text-blue-200">> My email is: <span class="text-white">nacho.gonzalez.lopez8@gmail.com</span></div>`;
                break;
            case "about":
                output.innerHTML += `<div class="text-blue-200">> I'm Ignacio, a full stack developer focused on modern design and attractive interfaces.</div>`;
                break;
            case "clear":
                output.innerHTML = initialTerminalContent;
                break;
            default:
                output.innerHTML += `<div class="text-blue-200">> Unknown command: <span class="text-red-500">${command}</span>. Type <span class="text-white">help</span> to see the available commands.</div>`;
        }

        output.scrollTop = output.scrollHeight;
    }
});
