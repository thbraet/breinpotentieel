const signalData = {
  rest: {
    eyebrow: "toestand · ongeveer −70 mV, variabel per cel",
    title: "Het membraan bewaart potentiële energie",
    body: "Na⁺ is vooral buiten, K⁺ vooral binnen en vrij Ca²⁺ is in het cytosol extreem laag. K⁺-lekkanalen en andere rustgeleidingen maken het membraan selectief doorlaatbaar; de Na⁺/K⁺-ATPase onderhoudt de gradiënten door per cyclus 3 Na⁺ naar buiten en 2 K⁺ naar binnen te pompen.",
    players: ["K⁺-lekkanalen", "Na⁺/K⁺-ATPase", "ionengradiënten"],
    result: "Een geladen membraan dat snel op input kan reageren."
  },
  input: {
    eyebrow: "dendriet & soma · milliseconden tot langer",
    title: "Synapsen veroorzaken lokale, graduele potentialen",
    body: "Geopende receptorkanalen veranderen lokaal de membraanspanning. Excitatoire postsynaptische potentialen maken vuren vaak waarschijnlijker; inhibitoire invloeden stabiliseren of verschuiven het membraan. Grootte neemt af met afstand en inputs tellen op in ruimte en tijd.",
    players: ["ligandgestuurde kanalen", "EPSP/IPSP", "ruimtelijke + temporele sommatie"],
    result: "Een gewogen som van duizenden recente inputs."
  },
  trigger: {
    eyebrow: "axoninitialsegment · beslispunt",
    title: "Positieve feedback overschrijdt de drempel",
    body: "Het axoninitialsegment bevat veel spanningsafhankelijke Na⁺-kanalen. Voldoende depolarisatie opent er enkele; Na⁺-instroom opent er vervolgens meer. Daardoor ontstaat een alles-of-niets-actiepotentiaal. Een sterkere stimulus maakt vooral méér spikes per tijdseenheid, geen veel grotere spikes.",
    players: ["Naᵥ-kanalen", "drempel", "positieve feedback"],
    result: "Een gestandaardiseerde spike die niet onderweg uitdooft."
  },
  spike: {
    eyebrow: "axon · circa 1–2 ms per lokale spike",
    title: "Na⁺ depolariseert; K⁺ repolariseert",
    body: "Naᵥ-kanalen openen snel en inactiveren kort daarna. Vertraagd openende Kᵥ-kanalen laten K⁺ uitstromen en brengen de spanning terug. Refractaire perioden sturen de richting en maximale frequentie. In gemyeliniseerde axonen wordt de spike vooral bij knopen van Ranvier vernieuwd.",
    players: ["Naᵥ-inactivatie", "Kᵥ-kanalen", "refractaire periode", "saltatoire geleiding"],
    result: "Betrouwbare overdracht van timing en vuurfreqentie."
  },
  calcium: {
    eyebrow: "presynaptische terminal · micro- tot milliseconden",
    title: "Ca²⁺ koppelt elektriciteit aan exocytose",
    body: "Depolarisatie opent spanningsafhankelijke Ca²⁺-kanalen. Lokale Ca²⁺-instroom bindt onder meer synaptotagmine en activeert de SNARE-fusiemachinerie. Een gevulde synaptische vesikel fuseert met de presynaptische membraan en geeft een kwantum transmitter vrij.",
    players: ["Caᵥ-kanalen", "synaptotagmine", "SNARE-complex", "synaptische vesikels"],
    result: "Neurotransmitter komt in de synaptische spleet."
  },
  receptor: {
    eyebrow: "postsynaptisch membraan · snel of traag",
    title: "De receptor bepaalt wat de boodschap betekent",
    body: "Ionotrope receptoren zijn zelf kanalen en reageren snel. Metabotrope receptoren activeren G-eiwitten en intracellulaire cascades, vaak trager en langer. Het aanwezige receptortype — niet alleen de transmitter — bepaalt of een doelcel wordt geëxciteerd, geïnhibeerd of gemoduleerd.",
    players: ["ionotrope receptor", "metabotrope receptor", "tweede boodschappers"],
    result: "Nieuwe elektrische of biochemische toestand in de doelcel."
  },
  clear: {
    eyebrow: "synaptische spleet & omgeving",
    title: "Het signaal moet ook weer stoppen",
    body: "Transporters nemen transmitter op in de presynaptische terminal of gliacellen; enzymen breken sommige transmitters af; een deel diffundeert weg. Vesikelmembraan wordt gerecycleerd en Ca²⁺ wordt uit het cytosol verwijderd of opgeslagen.",
    players: ["reuptaketransporters", "astrocyten", "afbraakenzymen", "endocytose"],
    result: "De synaps wordt gereset en blijft gevoelig voor timing."
  }
};

const brainData = {
  frontal: ["Frontale kwab", "Doelgericht gedrag, planning, werkgeheugen, inhibitie, sociale besluitvorming en vrijwillige motoriek.", "Werkt nauw met pariëtale cortex, basale ganglia, thalamus, limbische systemen en het cerebellum. De prefrontale cortex is geen algemene ‘CEO’; verschillende subgebieden dragen verschillende controles bij.", ["executieve controle", "motorplanning", "besluitvorming"]],
  parietal: ["Pariëtale kwab", "Integreert tast en lichaamssignalen, construeert ruimtelijke representaties en ondersteunt aandacht, rekenen en doelgerichte acties.", "Combineert visuele, somatosensorische en motorische informatie. Schade kan ruimtelijke verwaarlozing, rekenproblemen of gestoorde handelingen veroorzaken, afhankelijk van zijde en locatie.", ["ruimte", "aandacht", "lichaamskaart"]],
  temporal: ["Temporale kwab", "Verwerkt geluid, taalbetekenis, object- en gezichtskennis en levert corticale systemen voor declaratief geheugen.", "Mediale temporale structuren omvatten de hippocampus; laterale en ventrale gebieden koppelen perceptuele patronen aan betekenis. Taal is meestal links-dominant maar verdeeld.", ["gehoor", "betekenis", "geheugen"]],
  occipital: ["Occipitale kwab", "Ontvangt en verwerkt vooral visuele informatie: randen, oriëntatie, kleur, beweging en vorm.", "Visuele verwerking vertakt grofweg naar een ventrale ‘wat’-route richting temporale cortex en een dorsale ‘waar/hoe’-route richting pariëtale cortex.", ["zien", "vorm & kleur", "beweging"]],
  insula: ["Insula", "Integreert signalen uit het lichaam met emotie, smaak, pijn, salience en subjectieve toestand.", "Ligt verborgen in de laterale groeve en schakelt met cingulaire, frontale, temporale en subcorticale gebieden. Geen afzonderlijk ‘zelfbewustzijnscentrum’.", ["interoceptie", "salience", "smaak & pijn"]],
  hippocampus: ["Hippocampus", "Bindt elementen van gebeurtenissen en context tot relationele, episodische herinneringen en ondersteunt ruimtelijke representaties.", "Is belangrijk voor het vormen van veel nieuwe declaratieve herinneringen, maar niet de enige permanente opslagplaats. Interageert met brede cortex tijdens consolidatie en ophalen.", ["episodisch geheugen", "context", "ruimtelijke kaart"]],
  amygdala: ["Amygdala", "Leert en detecteert biologisch relevante betekenis, vooral bij dreiging, beloning en emotionele salience.", "Moduleert aandacht, autonome reacties en geheugen via verbindingen met hippocampus, hypothalamus en cortex. Ze verwerkt meer dan alleen angst.", ["salience", "emotioneel leren", "autonome respons"]],
  basal: ["Basale ganglia", "Selecteren en versterken acties, gewoontes en cognitieve beleidskeuzes op basis van context en uitkomsten.", "Vormen parallelle lussen met cortex en thalamus. Dopamine verandert leren en balans tussen routes; basale ganglia starten niet simpelweg alle beweging.", ["actie-selectie", "gewoonteleren", "beloningsleren"]],
  thalamus: ["Thalamus", "Routeert en transformeert sensorische en motorische informatie en helpt corticale toestand en aandacht organiseren.", "Bijna alle zintuiglijke informatie behalve reuk passeert thalamische kernen. Het is geen passief doorgeefstation: corticothalamische feedback is omvangrijk.", ["routering", "aandacht", "corticale ritmes"]],
  hypothalamus: ["Hypothalamus", "Regelt homeostase en gecoördineerde lichaamsresponsen: temperatuur, honger, dorst, circadiane timing, stress, voortplanting en hormonen.", "Stuurt het autonome zenuwstelsel en de hypofyse en koppelt interne chemische signalen aan gemotiveerd gedrag.", ["homeostase", "autonoom", "endocrien"]],
  cerebellum: ["Cerebellum", "Voorspelt fouten en verfijnt timing, coördinatie en motorisch leren; draagt ook bij aan cognitieve en affectieve timing.", "Vergelijkt bedoelde met verwachte en waargenomen gevolgen via sterk georganiseerde microcircuits. Bevat een groot aandeel van alle neuronen in het brein.", ["coördinatie", "timing", "foutgestuurd leren"]],
  brainstem: ["Hersenstam", "Onderhoudt vitale functies en basale toestand: ademhaling, cardiovasculaire regulatie, slaap-waak, reflexen en craniale zenuwfuncties.", "Omvat middenhersenen, pons en medulla. Kleine neuromodulerende kernen beïnvloeden via brede projecties bijna het hele brein.", ["vitale functies", "waaktoestand", "neuromodulatie"]]
};

function renderSignal(key) {
  const item = signalData[key];
  const panel = document.querySelector("#signal-panel");
  panel.innerHTML = `<span class="panel-eyebrow">${item.eyebrow}</span><h3>${item.title}</h3><p>${item.body}</p><div class="molecule-list">${item.players.map(player => `<span>${player}</span>`).join("")}</div><footer><span>resultaat</span><strong>${item.result}</strong></footer>`;
}

function renderBrain(key) {
  const [title, role, context, tags] = brainData[key];
  const panel = document.querySelector("#brain-panel");
  panel.innerHTML = `<span class="panel-eyebrow">geselecteerde structuur</span><h3>${title}</h3><p class="brain-role">${role}</p><p>${context}</p><div class="molecule-list">${tags.map(tag => `<span>${tag}</span>`).join("")}</div>`;
}

document.querySelectorAll("[data-signal]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-signal]").forEach(item => item.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    renderSignal(button.dataset.signal);
  });
});

document.querySelectorAll("[data-brain]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-brain]").forEach(item => item.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    renderBrain(button.dataset.brain);
  });
});

renderSignal("rest");
renderBrain("frontal");
