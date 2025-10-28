---
title : Relative humidity
param1 : Dry bulb temperature
param2 : Wet bulb temperature 
unit1 : "\u2070C"
unit2 : "\u2070C"
resultUnit : "%"
layout: calc
---
Relative humidity is the amount of water vapour present in air expressed as the percentage of amount needed for saturation at the same temperature.  

Humidity is an important parameters in printing industry,because paper is a hygroscopic material and absorbs moisture from atmosphere.


Humidity is calculated by noting dry and wet bulb temperatures and using psychometric charts.  

It can be calculated as 
$$
RH \text { (\%)} = Ew-N(1+0.00115 \times Tw) \times (Td-Tw)\times 100/Ed
$$


where Ew is 
$$6.112 e^ (17.502+Td)/240.97+Tw) $$

and Ed is 
$$
6.112e^ ((17.502+Td)/240.97+Tw) )) $$ 
Td is dry bulb temperature and Tw is wet bulb temperature.

### Reference
[Wikipedia](https://en.wikipedia.org/wiki/Humidity)

<script>  
    const inputs = document.querySelectorAll('input');    
    inputs.forEach(input => {   
      input.addEventListener('input', () => {
        i
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
      //const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result =  ((6.112 * Math.exp((17.502 * v2) / (240.97 + v2))) - 0.6687 * (1 + 0.00115 * v1) * (v1 - v2)) * 100 / (6.112 * Math.exp((17.502 * v1) / (240.97 + v1)))

      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>

 