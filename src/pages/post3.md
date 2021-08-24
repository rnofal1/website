---
title: "Nintendo N8 Controller"
date: "Completed"
---
Goal: Create an interface to communicate between a Nintendo controller and an FPGA.
---
In this project, I was tasked with programming an FPGA to communicate with a Nintendo N8 gamepad.

This project involved two main components: 1) generating latch and pulse waveforms within the FPGA to signal to the 
controller when to send certain data and 2) reading the data sent by the controller to light up LEDs on the FPGA.

![N8 control](n8.png)


Each pulse of the waveform represented a different gamepad button, whose state would be sent to the FPGA on the rising 
edge of its pulse.

My high-level approach to this project was to create a state machine, with each state representing a different pulse/button.

This project was written in Verilog, compiled using Quartus.
