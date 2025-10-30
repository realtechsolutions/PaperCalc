---
title : Acidity
param1 : Burette reading
param2: Normality of alkali solution
param3: Sample Volume 
unit1 : ml
unit2 : N
unit3 : ml
resultUnit : ppm 
layout: calc
---


Acidity is the capacity of water to resist changes in pH that would make water more alkaline.
It is measured by titrating sample with a alkali until pH changes abruptly indicated by color change of phenolphthalein or methyl orange indicator.  
Acidity is of two types _methyl orange acidity_ and _phenolphthalein acidity_.
### Test Method : 
Take 50-100 ml sample in conical flask add few drops of phenolphthalein or methyl orange indicator and titrate with 0.5N NaOH solution till colour of solution changes to pink.
Formula for calculation of acidity  is,
$$ Acidity  = \frac {A\times N \times 50000}{Sample Volume } $$ 
    

where A is burette reading and N is normality of Alkali solution.


<figure>
<img src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Titolazione.gif"/>
<figcaption style = "font-size :13px"  > Acid Base Titration Source:Wikipedia     </figcaption>
</figure>



### References
[Wikipedia](https://en.wikipedia.org/wiki/PH)

<script>
  // Select all input fields in param rows
  const inputs = document.querySelectorAll('input');

  // Attach event listeners
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      calculate();
    });
  });

  // Calculate function for Acidity
  function calculate() {
    const beuretteReading = parseFloat(document.getElementById('param1')?.value) || 0;
    const normality = parseFloat(document.getElementById('param2')?.value) || 0;
    const sampleVolume = parseFloat(document.getElementById('param3')?.value) || 0;

    //alert(beuretteReading)

    const result = (beuretteReading * normality * 50000) / sampleVolume;
    //alert (result)
    
document.getElementById('result').innerHTML = `${result.toFixed(2)} `;
    // document.getElementById('result').textContent = `${result.toFixed(2)} {{ page.resultUnit }}`;
  }

  // Optional: calculate on page load if inputs have default values
  calculate();
</script>

  
