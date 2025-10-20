---
title : Residual chlorine
param1 : Burette reading,
param2 : "Normality of sodium <br>thio sulphate"
param3 : Sample Volume,
unit1 : ml,
unit2 : N,
unit3 : g,
resultUnit : ppm
layout: calc
---

Residual chlorine is low amount of chlorine left in pulp  after washing of pulp.  

It is measured by titrating sample  with  Sodium thiosulphate using starch iodine titration method until color changes.
Formula for calculation.
$$ 
\text {Residual chlorine} = \frac {V\times N\times 35.5}{\text {Sample  volume}} 
$$

where V is burette reading and N is normality of sodium thiosulphate.
### Test Method: 
- Squeeze the pulp and take about 100 ml water  sample in a beaker add 5 ml acetic acid + 1-2 g KI powder.
- Colour of sample will become yellow and then titrate with sodium thiosulphate till yellow color fades.
 - Now add 1-2 ml starch solution  the colour will become blue and again titrate with sodium thiosulphate till blue colour disappears. 
- Note down the burette reading and calculate as per above formula.

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
      // Check on page load
      if (input.value) {
        input.closest('.outlined-field').classList.add('has-content');
      }
    });
    // Calculate function 
    function calculate() {
      const v1 = parseFloat(document.getElementById('param1').value) || 0;
      const v2 = parseFloat(document.getElementById('param2').value) || 0;      
      const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result =  (v1 * v2 * 35.5 / v3)

      document.getElementById('result').value = result.toFixed(2);
    }
</script>
 