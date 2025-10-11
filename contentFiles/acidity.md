---
title : Acidity
param1 : Beurette reading
param2: Normality of alkali solution
param3: Sample Volume 
unit1 : ml
unit2 : N
unit3 : ml
resultUnit : ppm 
layout: calc3
---

#### {{page.title}}
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
    const inputs = document.querySelectorAll('.outlined-field input:not([readonly])');    
    inputs.forEach(input => {
      // Check on input
      input.addEventListener('input', () => {
        if (input.value) {
          input.closest('.outlined-field').classList.add('has-content');
        } else {
          input.closest('.outlined-field').classList.remove('has-content');
        }        
        // Auto-calculate on every input change
        calculate();
      });
      
      // Check on page load
      if (input.value) {
        input.closest('.outlined-field').classList.add('has-content');
      }
    });

    // Calculate function (example: simple sum)
    function calculate() {
      const beuretteReading = parseFloat(document.getElementById('param1').value) || 0;
      const normality = parseFloat(document.getElementById('param2').value) || 0;
      const sampleVolume= parseFloat(document.getElementById('param3').value) || 0;
      //const param4 = parseFloat(document.getElementById('param4').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = (beuretteReading*normality*50000)/sampleVolume
      
      document.getElementById('result').value = result.toFixed(2);
    }


</script>