---
title : Alkali loss
param1 : Beurette reading
param2: Normality of acid
param3: Sample Volume 
unit1 : ml
unit2 : N
unit3 : ml
resultUnit : ppm 
layout: calc
---


Alkali Loss is the amount of residual alkali in pulp after washing of pulp.  

It is measured by titrating with a acid until pH changes abruptly.  

   
Formula for calculation,   

$$ \text {Alkali Loss} = \frac  {A\times N \times 40}  {\text{Sample weight}} $$  


         
where A is burette reading and N is normality of acid.

<script>  
    const inputs = document.querySelectorAll('input');    
    inputs.forEach(input => {     
      input.addEventListener('input', () => {
       
              calculate();
      });      
        
    }); 
    function calculate() {
      const beuretteReading = parseFloat(document.getElementById('param1').value) || 0;
      const normality = parseFloat(document.getElementById('param2').value) || 0;
      const sampleVolume= parseFloat(document.getElementById('param3').value) || 0; 
    const result = (beuretteReading*normality*40)/sampleVolume      
      document.getElementById('result').innerHTML = result.toFixed(2);
    }
</script>

