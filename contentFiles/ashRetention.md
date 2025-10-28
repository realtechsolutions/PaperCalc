---
title : First pass ash retention
param1 : Head Box ash
param2: Back water ash

unit1 : "%"
unit2 : "%"

resultUnit : "%"
layout: calc
---
First pass retention and ash retention are important process parameters for wet-end control of paper machine.

ow values of FPR and ash retention results in inefficient use of costly furnish components.  

Unretained furnish components like fillers,fibers and additives can create collection,disposal and deposits problems.
### Test Method: 
Take Head box and tray water sample at the same time then calculate Ash in Head box sample and back water sample and then calculate Ash retention as per formula given below.
  


$$
 \text{Ash retention } = \frac { \text {H/B ash - B/W ash } } {\text {H/B ash}} \times100
$$  

<script>  
    const inputs = document.querySelectorAll('input');    
    inputs.forEach(input => {     
      input.addEventListener('input', () => {
        
              calculate();
      });      
         
    }); 
    function calculate() {
      const headBoxAsh = parseFloat(document.getElementById('param1').value) || 0;
      const backWaterAsh = parseFloat(document.getElementById('param2').value) || 0;
     
    const retention = ((headBoxAsh - backWaterAsh)*100)/headBoxAsh   
      document.getElementById('result').innerHTML = retention.toFixed(2);
    }
</script>