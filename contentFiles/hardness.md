---
title : Hardness of water
param1 : Burette reading
param2: Normality EDTA
param3 : Sample Volume 
unit1 : ml
unit2 : N
resultUnit : ppm
layout: calc
---

Total hardness is defined as sum of calcium and magnesium concentrations expressed as CaCO<sub>3</sub> in mg/l. 
### Test Method:</b> 
- Take 100 ml sample in conical flask add 2-3 drops Erichrome black indicator  
- Titrate with 0.5 N EDTA solution.
- Total hardness is calculated as
  $$ \frac {V \times N\times50000}{\text{Sample volume}} $$   
where 
V is beurette reading,and N is normality of EDTA solution.
### References
[Wikipedia](https://en.wikipedia.org/wiki/Hard_water)

<script>  
    const inputs = document.querySelectorAll('input');    
    inputs.forEach(input => {   
      input.addEventListener('input', () => {
       
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
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;      
     
      const result = (v1*v2*50000/v3)
      
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>



