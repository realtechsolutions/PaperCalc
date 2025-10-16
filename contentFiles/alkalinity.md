---
title : Alkalinity
param1 : Beurette reading
param2: Normality of acid solution
param3: Sample Volume 
unit1 : ml
unit2 : N
unit3 : ml
resultUnit : ppm 
layout: calc3
---

Alkalinity is the capacity of water to resist changes in pH that would make water more acidic.  
It is measured by titrating a sample with an acid until the pH changes abruptly.  
Alkalinity is expressed as phenolphthalein alkalinity or total alkalinity.   _Phenolphthalein alkalinity_ measures the hydroxides and half of the carbonates at pH 8.3.   Phenolphthalein indicator is used in this titration.   
_Total alkalinity_ measures all carbonate, bicarbonate, and hydroxide alkalinity at pH 4.5. Methyl Orange indicator is used in this titration.

### Test Method:

First, fill a burette with 0.1N HCl, then take about 50 ml of the sample in a conical flask and add a few drops of phenolphthalein indicator.  
The color of the solution turns pink. Now titrate it with 0.1 N HCl by adding HCl drop by drop until the pink color disappears.  
Note the burette reading and calculate alkalinity according to the formula given below.  
The formula for the calculation of alkalinity is:

$$
Alkalinity = \frac {A \times N \times 50000} {Sample Volume}
$$

where \( A \) is the burette reading and \( N \) is the normality of the acid.

<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Titolazione.gif" />
  <figcaption style="font-size: 13px">Acid Base Titration Source: Wikipedia</figcaption>
</figure>

#### References
[Wikipedia](https://en.wikipedia.org/wiki/Alkalinity)

<script>  
    const inputs = document.querySelectorAll('.outlined-field input:not([readonly])');    
    inputs.forEach(input => {     
      input.addEventListener('input', () => {
        if (input.value) {
          input.closest('.outlined-field').classList.add('has-content');
        } else {
          input.closest('.outlined-field').classList.remove('has-content');
        }   
              calculate();
      });      
          if (input.value) {
        input.closest('.outlined-field').classList.add('has-content');
      }
    }); 
    function calculate() {
      const beuretteReading = parseFloat(document.getElementById('param1').value) || 0;
      const normality = parseFloat(document.getElementById('param2').value) || 0;
      const sampleVolume= parseFloat(document.getElementById('param3').value) || 0; 
    const result = (beuretteReading*normality*50000)/sampleVolume      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>