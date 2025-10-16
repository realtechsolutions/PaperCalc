---
title : Alkali loss
param1 : Beurette reading
param2: Normality of acid
param3: Sample Volume 
unit1 : ml
unit2 : N
unit3 : ml
resultUnit : ppm 
layout: calc3
---


Alkali Loss is the amount of residual alkali in pulp after washing of pulp.  

It is measured by titrating with a acid until pH changes abruptly.  

   
Formula for calculation,   

$$ \text {Alkali Loss} = \frac  {A\times N \times 40}  {\text{Sample weight}} $$  


         
where A is burette reading and N is normality of acid.

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