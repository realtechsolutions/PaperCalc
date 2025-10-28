---
layout : calc
title : Chemical oxygen demand
param1 : Volume of FAS used for blank
param2 : Volune of FAS used for sample 
param3 : molaraity of FAS
param4 : Sample volume
unit1 : ml
unit2 : ml
unit3 : M
unit4: ml
resultUnit : mg/l
---

Chemical oxygen demand(COD) is amount of oxygen consumed in complete chemical oxidation of matter present in waste water.  

It indicates the content of slowly degradable organic matter present.
COD is easier to measure compared to BOD.
### Test Method 
1. Place sample (2.5 mL) in  tube and Add K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>.  digestion solution (1.5 mL).
    
2. Carefully add sulphuric acid reagent (3.5 mL) in the vessel and mix thoroughly.
3. Place tube in a digester and reflux for 2 hr at 150 degree temp.
4. Cool to room temp.
5. Add a few drops of ferroin indicator and titrate with 0.1 M Ferrous ammonium sulphate(FAS).
6. The end point is a sharp color change from blue-green to reddish brown, although the  colour blue green may reappear.
7. In the same manner reflux and titrate a blank containing the reagents and a volume of dist. water equal to sample.
8. COD is given by formula,  
   
   $$
   COD (\text {mg } O_2 /L) = \frac{(A-B) × M ×8000) } { \text {Sample volume}}  
$4
Where: A = volume of FAS used for blank (mL)   
B = volume of FAS used for sample (mL)  
M = molarity of FAS   
8000 = milli equivalent weight of oxygen (8) ×1000 mL/L.

### References
[Wikipedia](https://en.wikipedia.org/wiki/Chemical_oxygen_demand)

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

    // Calculate function 
    function calculate() {
      const fasBlank = parseFloat(document.getElementById('param1').value) || 0;
      const fasSample = parseFloat(document.getElementById('param2').value) || 0;
      const molarity = parseFloat(document.getElementById('param3').value) || 0;
      const sampleVolume= parseFloat(document.getElementById('param4').value) || 0;
      //const param4 = parseFloat(document.getElementById('param4').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = ((fasBlank -  fasSample)*molarity *80000)/sampleVolume
      
      document.getElementById('result').value = result.toFixed(2);
    }


</script>