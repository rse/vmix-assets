
vMix Assets
===========

About
-----

This is a small collection of *GT Title* and *Virtual Set* input assets
for the video/audio stream mixing software [vMix](https://www.vmix.com/)
(4K and Pro editions only).

The individual assets are:

- **vMix-Title-LowerThirdLR**<br/>
  This is a *GT Title* template for a lower-third overlay input which
  comes in through a "gate" from left to right. It is intended to be
  used for the name and title of a person which is placed towards left
  on stage.

- **vMix-Title-LowerThirdRL**<br/>
  This is a *GT Title* template for a lower-third overlay input which
  comes in through a "gate" from right to left. It is intended to be
  used for the name and title of a person which is placed towards right
  on stage.

- **vMix-Title-StageHints**<br/>
  This is a *GT Title* template for a (usually NDI exported) full-screen
  input comes displays a static green, static blue or blinking red
  information. It is intended to show hints on the stage. The crux
  is: the "title" does nothing on *TransitionIn*, but uses the custom
  transitions *Page1*, *Page2* and *Page3* for rendering the different
  hints and uses the special transition *Continuous* for blinking the
  red hint.

- **vMix-VirtualSet-VPTZ**<br/>
  This is a *Virtual Set* template based on three inputs (canvas, camera
  and optional grid). It is intended for assembling the various Virtual
  PTZ style views in a greenscreen-based production. The crux is: only
  a Virtual Set input can use SetPanX/SetPanY/SetZoom (positioning) for
  more than the Main layer.

- **vMix-VirtualSet-Flatten**<br/>
  This is a *Virtual Set* template based on three
  full-screen/pass-through UV Map inputs (720p, 1080p and 2160p). It
  is intended to be used to optically "flatten" inputs (usually based
  on layers and/or positioning filter) in order to further apply more
  filters (like another positioning). The crux is: only (the instance
  limited) Mix-inputs and (the instance unlimited) Virtual Sets with UV
  Maps can pre-render and this way flatten layers.

- **vMix-VirtualSet-Multiview**<br/>
  This is a *Virtual Set* template based on 7 camera angles.
  It is intended to be used to create per-camera multiviews.

- **vMix-VirtualSet-DeFisheye**<br/>
  This is a *Virtual Set* template based on a single camera input. It
  is intended to be used to remove the fisheye effect of a camera lens
  (the particular underlying UVMap currently matches a Amcrest IP2M-841B
  camera and might have to be adjusted for the lense of a different camera).

Installation
------------

1. Clone this [repository](https://github.com/rse/vmix-assets):<br/>
   `git clone https://github.com/rse/vmix-assets`

2. For the *GT Title* assets, add an input in vMix with:<br/>
   **Add Input** &rarr; **Title/XAML** &rarr; **Browse** &rarr; `vMix-Title-XXXX.gtzip` &rarr; **Open**

3. For the *Virtual Set* assets, add an input in vMix with:<br/>
   **Add Input** &rarr; **Virtual Sets** &rarr; **Browse** &rarr; `vMix-VirtualSet-XXXX/` &rarr; **OK**

License
-------

Copyright &copy; 2022 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


