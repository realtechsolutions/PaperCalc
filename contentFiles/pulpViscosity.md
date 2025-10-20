---
title : Viscosity of pulp
param1 : Viscometer constant
param2 : Effux Time
unit1 : No.
unit2 : sec
resultunit : cP
layout: calc
---
Pulp solution viscosity gives an indication of  degree of polymerisation of cellulose.  
Therefore it gives indication of degradation of cellulose resulting from pulping and bleaching
operations.
## Test Method: 
- Take 0.250g  OD pulp in a dissolving bottle and add 25 ml dist.water shake the bottle to mix the pulp.
- Add 25 ml of cupriethylenediamine solution.
- Purge with nitrogen for  one minute and shake for about 15 minutes.
- Place the solution in viscometer and measure time in sec.
  
Calculate viscosity by formula 
$$ V : C\times t \times d $$ 
Where V is viscosity in cP C is viscometer const. and t is effux time.

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
      
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;    
      const result =   (v1 * v2)
      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>

 