const routes = {
  exercise: {
    steps: [
      ["Gedrag", "Aerobe beweging"],
      ["Fysiologie", "Vaatfunctie + mitochondriën + neurotrofe signalering"],
      ["Neuraal", "Betere energiebeschikbaarheid en synaptische aanpassing"],
      ["Potentieel", "Neurale capaciteit + netwerkcapaciteit + plasticiteit"]
    ],
    note: "Beweging werkt breed: het ondersteunt zowel de voorwaarden voor neuronoverleving als de biologische omgeving waarin leren kan plaatsvinden."
  },
  sleep: {
    steps: [
      ["Gedrag", "Voldoende, regelmatige slaap"],
      ["Fysiologie", "NREM/REM + stressregulatie + herstel"],
      ["Neuraal", "Consolidatie, synaptische homeostase en onderhoud"],
      ["Potentieel", "Vooral netwerkcapaciteit en plasticiteit"]
    ],
    note: "Slaap ondersteunt zowel onderhoud als leren. Ze wist niet simpelweg alle zwakke verbindingen, maar helpt netwerkactiviteit selecteren en stabiliseren."
  },
  learning: {
    steps: [
      ["Gedrag", "Gerichte oefening met feedback"],
      ["Fysiologie", "Specifieke, herhaalde neurale activiteit"],
      ["Neuraal", "Calciumsignalen → genexpressie → LTP/LTD"],
      ["Potentieel", "Plasticiteit stuurt betere netwerkorganisatie"]
    ],
    note: "Beweging kan plasticiteit faciliteren; ervaring geeft richting. Alleen oefenen activeert precies de netwerken die voor de vaardigheid moeten veranderen."
  },
  vascular: {
    steps: [
      ["Gedrag", "Bloeddruk, LDL en glucose gezond houden"],
      ["Fysiologie", "Minder vaatwand- en microvasculaire schade"],
      ["Neuraal", "Betrouwbaardere toevoer en minder ischemische schade"],
      ["Potentieel", "Direct neurale capaciteit; indirect netwerk en plasticiteit"]
    ],
    note: "Cardiometabole factoren werken vooral upstream: ze bepalen hoe robuust de infrastructuur blijft waarop alle neurale activiteit steunt."
  }
};

const routeTrack = document.querySelector("#route-track");
const routeNote = document.querySelector("#route-note");

function renderRoute(key) {
  const route = routes[key];
  routeTrack.innerHTML = route.steps.map((step, index) => {
    const card = `<div class="route-step"><span>${step[0]}</span><strong>${step[1]}</strong></div>`;
    return index === route.steps.length - 1 ? card : `${card}<div class="route-arrow" aria-hidden="true">→</div>`;
  }).join("");
  routeNote.textContent = route.note;
}

document.querySelectorAll("[data-route]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-route]").forEach(item => item.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    renderRoute(button.dataset.route);
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
    document.querySelectorAll(".habit-card").forEach(card => {
      const visible = filter === "all" || card.dataset.targets.split(" ").includes(filter);
      card.classList.toggle("hidden", !visible);
    });
  });
});

renderRoute("exercise");
