---
title : Total,active and effective alkali
param1 : Beurette reading
param2 : Normality of HCl
param3 : Sample volume
unit1 : ml
unit2 : N
unit3 : ml
resultUnit : gpl as NaOH
layout: calc
---
Total alkali is total concentration of alkaline constituents in the liquor.  
Active Alkali is total concentration of alkaline constituents except carbonates.    
Effective alkali is concentration of strongly alkaline constituents mainly hydroxyl ions.
### Test Method: 
-Take 5 ml liquor in a 200 ml conical flask dilute with 30 ml distt.
- Add 20 ml barium chloride.
- Then add formaldehyde to convert hydrogen sulphide to strong base and continue titration to pH 8.0 using phenolphthalin indicator.
- Note the reading as b .
-Finally total alkali is determined by continuing titration to pH 4.0 using bromophenol blue indicator.
-Note the reading as c.

Formula for  calculation is,
$$ \text {Effective alkali} =  \frac {a \times m}{v} $$

$$ \text {Active alkali} =  \frac {b \times m}{v} $$ 
$$
\text {Total alkali} = \frac {c\times m}{v} $$
where ,  
a= HCl consumed using thymopthaline     indicator.  
b= consumption of HCl using phenolphthalin indicator.    
c = consumption of HCl using bromophenol indicator.  
m= molar concentration of HCl.  
v= volume of sample in ml. 
#### Reference
[Wikipedia](https://en.wikipedia.org/wiki/White_liquor)

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
      //const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result = (v1 * v2 * 40 / v3)

      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>
 
  