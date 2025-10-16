---
title: PID controller
layout: description
---

The most basic control system is on/off control but this control system is not very useful because of its oscillatory nature.

To control the output to a desired set point three control actions are necessary,these are proportional,integral and derivative.  

If we use only proportional control a steady state error is generated because feedback controller works only on the error and if there is no error 
it will not work.  
To reduce this steady state error integral action is required.  

Proportional and integral actions create oscillations in the system, to make the system stable derivative action is used.  

In PID controller we have all these three control actions. 
PID controller maintains the output such  that there is zero error between the process variable and set-point by closed-loop operations.

<figure>
<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/PID_en.svg/320px-PID_en.svg.png">
<figcaption style = "font-size :13px"  >Working of PID Controller Image Source:Wikipedia </figcaption>
</figure >

There are several methods to set proportional integral and derivative gains.(K<sub>p</sub>, K<sub>i</sub> and K<sub>d</sub>).  

Manual setting and Zeigller method are common method to set controller parameters.

In manual method first K<sub>p</sub> is set keeping derivative and integral constants zero and it is increased till system oscillates. then K<sub>i</sub> and K<sub>d</sub> are set.

<figure>
<img src = "https://upload.wikimedia.org/wikipedia/commons/3/33/PID_Compensation_Animated.gif" alt = "....Loading image" >
<figcaption style = "font-size :13px"  >PID Controller tuning Image Source:Wikipedia </figcaption>
</figure>

### Other reference  
[Wikipedia](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller)