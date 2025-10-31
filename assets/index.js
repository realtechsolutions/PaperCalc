const itemsList = [
  { name: "Alkalinity", fileName: "alkalinity.md", type: "calculate" },
  { name: "Acidity", fileName: "acidity.md", type: "calculate" },
  { name: "Alkali Loss", fileName: "alkaliLoss.md", type: "calculate" },
  { name: "Activated Sludge Process", fileName: "activatedSludge.md", type: "info" },
  { name: "Approach Flow System", fileName: "approach.md", type: "info" },
  { name: "Automatic Process Control", fileName: "autoControl.md", type: "info" },
  { name: "Basis weight,caliper and bulk", fileName: "basisWeight.md", type: "info" },
  { name: "BOD", fileName: "bod.md", type: "calculate" },
  { name: "Boil Out", fileName: "boilout.md", type: "info" },
  { name: "Brightness,Whiteness and Shade", fileName: "brightness.md", type: "info" },
  { name: "Breaking Length", fileName: "breakinglength.md", type: "calculate" },
  { name: "Bursting Strength", fileName: "bursting.md", type: "info" },
  { name: "Calorific Value", fileName: "calorificValue.md", type: "info" },
  { name: "Blade coating", fileName: "bladeCoating.md", type: "info" },
  { name: "COD", fileName: "cod.md", type: "calculate" },
  { name: "Change in crown of two rolls", fileName: "crownChange.md", type: "calculate" },
  { name: "Conditioning of paper", fileName: "conditioningPaper.md", type: "info" },
  { name: "Cobb of paper", fileName: "cobb.md", type: "info" },
  { name: "Critical speed of a roll", fileName: "criticalSpeed.md", type: "calculate" },
  { name: "Calendering of paper", fileName: "calendering.md", type: "info" },
  { name: "Centricleaners or Hydrocyclones", fileName: "centricleaner.md", type: "info" },
  { name: "Cellulose, Hemicellulose and Lignin", fileName: "celluloseLignin.md", type: "info" },
  { name: "Couch Roll", fileName: "couch.md", type: "info" },
  { name: "DCS", fileName: "dcs.md", type: "info" },
  { name: "Digester", fileName: "digester.md", type: "info" },
  { name: "Degree SR of pulp", fileName: "degreeSr.md", type: "info" },
  { name: "Dissolved Oxygen", fileName: "dissolvedOxygen.md", type: "info" },
  { name: "Dandy Diameter", fileName: "dandyDia.md", type: "calculate" },
  { name: "Dosing Calculations(Batch)", fileName: "doseBatch.md", type: "calculate" },
  { name: "Dosing Calculations (Continuous)", fileName: "doseContinuous.md", type: "calculate" },
  { name: "Drying Rate", fileName: "dryingRate.md", type: "calculate" },
  { name: "Dyes", fileName: "dyes.md", type: "info" },
  { name: "Doctor blades", fileName: "doctorBlades.md", type: "info" },
  { name: "Machine Draw", fileName: "draw.md", type: "calculate" },
  { name: "Electric power of motor", fileName: "electricpower.md", type: "calculate" },
  { name: "Elemental Chlorine Free (ECF)", fileName: "ecf.md", type: "info" },
  { name: "First Pass Retention", fileName: "fpr.md", type: "calculate" },
  { name: "Energy audits", fileName: "energyAudit.md", type: "info" },
  { name: "First pass ash retention", fileName: "ashRetention.md", type: "calculate" },
  { name: "Felt management", fileName: "feltManagement.md", type: "info" },
  { name: "Gloss of paper", fileName: "gloss.md", type: "info" },
  { name: "Hardness of water", fileName: "hardness.md", type: "calculate" },
  { name: "Head-box Pressure", fileName: "headBoxpressure.md", type: "calculate" },
  { name: "Headbox Flow Rate", fileName: "headBoxFlow.md", type: "calculate" },
  { name: "Hydrofoil", fileName: "hydrofoil.md", type: "info" },
  { name: "Kappa Number", fileName: "kappa.md", type: "info" },
  { name: "Moment of Inertia of a roll", fileName: "momentInertia.md", type: "calculate" },
  { name: "Multiple effect evaporators", fileName: "multiEvaporator.md", type: "info" },
  { name: "Nano technology in paper industry", fileName: "nanotechnology.md", type: "info" },
  { name: "Nip Load", fileName: "nipLoad.md", type: "calculate" },
  { name: "Pump output power", fileName: "pumpOutput.md", type: "calculate" },
  { name: "Pump NPSHA", fileName: "pumpNPSHA.md", type: "calculate" },
  { name: "Pressure drop in pipes", fileName: "pressureDrop.md", type: "calculate" },
  { name: "Pump Power", fileName: "pumppower.md", type: "calculate" },
  { name: "Porosity of paper", fileName: "porosity.md", type: "info" },
  { name: "Paper Defects", fileName: "paperdefects.md", type: "info" },
  { name: "Pump Basics", fileName: "pumpBasics.md", type: "info" },
  { name: "PID Controller", fileName: "pid.md", type: "info" },
  { name: "PLC", fileName: "plc.md", type: "info" },
  { name: "Pressure Screen", fileName: "pressureScreen.md", type: "info" },
  { name: "Paper Sizes", fileName: "papersizes.md", type: "info" },
  { name: "Papermaking Process", fileName: "papermaking.md", type: "info" },
  { name: "Viscosity of Pulp", fileName: "pulpViscosity.md", type: "calculate" },
  { name: "Ream weight (500 Sheets)", fileName: "reamcalculation.md", type: "calculate" },
  { name: "Reel Length", fileName: "reelweight.md", type: "calculate" },
  { name: "Relative Humidity", fileName: "relativeHumidity.md", type: "calculate" },
  { name: "Residual Chlorine", fileName: "residualChlorine.md", type: "calculate" },
  { name: "Refining of pulp", fileName: "refining.md", type: "info" },
  { name: "Rheology and viscosity of fluids", fileName: "rheology.md", type: "info" },
  { name: "Stiffness of paper", fileName: "stiffness.md", type: "info" },
  { name: "Steam and condensate system", fileName: "steamCondensate.md", type: "info" },
  { name: "Steam and power generation", fileName: "steamGeneration.md", type: "info" },
  { name: "Shoe Press", fileName: "shoePress.md", type: "info" },
  { name: "Soda Recovery Process", fileName: "sodaRecovery.md", type: "info" },
  { name: "Smoothness of paper", fileName: "smoothness.md", type: "info" },
  { name: "Smart sensors", fileName: "smartSensor.md", type: "info" },
  { name: "Suction Rolls", fileName: "suctionrolls.md", type: "info" },
  { name: "Tear factor", fileName: "tear.md", type: "calculate" },
  { name: "Total,active and effective alkali", fileName: "totalAlkali.md", type: "calculate" },
  { name: "Tensile index of paper", fileName: "tensile.md", type: "calculate" },
  { name: "Twin wires", fileName: "twinwire.md", type: "info" },
  { name: "Total productivity management", fileName: "tpm.md", type: "info" },
  { name: "Vacuum pump capacity", fileName: "vacuumPump.md", type: "calculate" },
  { name: "V Notch Flow Rate", fileName: "vnotch.md", type: "calculate" },
  { name: "Vacuum systems", fileName: "vacuumSystem.md", type: "info" },
  { name: "Yankee Roll", fileName: "yankee.md", type: "info" },
  { name: "Wire Tension Roll", fileName: "wireTenssionRoll.md", type: "info" },
  { name: "Wet-end chemistry", fileName: "wetendChemistry.md", type: "info" },
  { name: "Paper machine wire", fileName: "wire.md", type: "info" },
  { name: "Wax Pick of paper", fileName: "waxpick.md", type: "info" },
  { name: "pH of Solutions", fileName: "pH.md", type: "info" },
  { name: "Web break analysis", fileName: "webbreakAnalysis.md", type: "info" }
];



const listContainer = document.getElementById("item-list");
const searchBox = document.getElementById("search-box");

function renderList(items) {
  listContainer.innerHTML = "";

  if (items.length === 0) {
    listContainer.innerHTML = `<li>No results found.</li>`;
    return;
  }

  const sorted = items.slice().sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );

  sorted.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.className = "list-item";
    a.href = `contentFiles/${item.fileName.replace(/\.md$/i, ".html")}`;

    const icon = document.createElement("span");
    icon.className = "item-icon " + (item.type === "calculate" ? "fa-solid fa-calculator" : "fa-solid fa-info-circle");

    const text = document.createElement("span");
    text.className = "item-name";
    text.textContent = item.name;
 //const hr = document.createElement("hr")
    a.appendChild(icon);
    a.appendChild(text);
    li.appendChild(a);
    listContainer.appendChild(li);
    //listContainer.appendChild(hr)
  });
}

searchBox.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  renderList(itemsList.filter(i => i.name.toLowerCase().includes(value)));
});

renderList(itemsList);



//  const listContainer = document.getElementById('item-list');
//         const searchBox = document.getElementById('search-box');
//         function renderList(items) {
//             listContainer.innerHTML = ''; // Clear content
//             if (items.length === 0) {
//                 listContainer.innerHTML = '<div class="list-item"><p class="item-name">No items found.</p></div>';
//                 return;
//             }

//             // sort a copy of items alphabetically by name (case-insensitive)
//             const sorted = items.slice().sort((a, b) =>
//               a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
//             );

//             sorted.forEach(item => {
//                 const listItem = document.createElement('a'); // Use <a> tag for semantics and hover
//                 listItem.className = 'list-item';
                
//                 listItem.addEventListener('click', (e) => {
//                     e.preventDefault(); 
                    
//                    let htmlFile = item.fileName.replace(/\.md$/i, '.html');
//                     window.location.href = `contentFiles/${htmlFile}`;
//                 });              
//                 const icon = document.createElement('i');
//                 icon.className = item.type === 'calculate'
//                  // ? 'fa-solid fa-calculator item-icon'
//                   ? 'fa-solid fa-calculator item-icon'
//                   : 'fa-solid fa-info-circle item-icon';
//                 icon.setAttribute('aria-hidden', 'true');
//                 const nameParagraph = document.createElement('p');
//                 nameParagraph.className = 'item-name';
//                 nameParagraph.textContent = item.name;
//                 listItem.appendChild(icon);
//                 listItem.appendChild(nameParagraph);
//                 listContainer.appendChild(listItem);
//                 //  if (index < sorted.length - 1) {
//      const hr = document.createElement('hr');
//     listContainer.appendChild(hr);
//     //}

                
//             });
//         }        
//         searchBox.addEventListener('input', (event) => {
//             const searchTerm = event.target.value.toLowerCase();
//             const filteredList = itemsList.filter(item => 
//                 item.name.toLowerCase().includes(searchTerm)
//             );
//             renderList(filteredList);
//         });
//         // Initial render
//         renderList(itemsList);
