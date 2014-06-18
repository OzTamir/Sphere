Sphere - A simple game written in Three.js
======

![Sphere Preview](https://raw.githubusercontent.com/OzTamir/Sphere/master/demo.png)

# Introduction
Sphere is a little game I wrote to get my hands dirty with Three.js, a JavaScript 3D Library which makes WebGL simpler.

# Controls

## The Ball
The ball is controled using the arrow keys. It works just as you'd expect, but here is the reference guide anyway:
### Ball controls:
	- Up: Go "further" into the screen (Decrease Position on the Z axis)
	- Down: Advance "out of the screen" and "towards the user" (Increase Position on the Z axis)
	- Left: Go left (Decrease Position on the X axis)
	- Right: Go right (Increase Position on the X axis)

## The Camera
The camera is controled using the Q,E,W,A,S and D keys.
### Camera controls:
	- Q: Go "further" into the screen (Decrease Position on the Z axis)
	- E: Advance "out of the screen" and "towards the user" (Increase Position on the Z axis)
	- W: Add to the camera's height (Increase Position on the Y axis)
	- S: Lower the camera's height (Decrease Position on the Y axis)
	- A: Go left (Decrase Position on the X axis)
	- D: Go right (Decrease Position on the X axis)
	- R: Set the camera back to it's initial position

## Miscellaneous
These keys are used to set the game enviroment rather than changing any in-game object.
### Misc. controls:
	- F: Switch to full-screen mode (Not available on all browsers)
	- P: Take a screenshot (Note: This might get blocked by popup blockers)

# Acknowledgment
 - [Three.js] (http://threejs.org/) A JavaScript 3D Library which makes WebGL simpler.
 - [Three.js Boilerplate] (https://github.com/jeromeetienne/threejsboilerplate) Boilerplate for Three.js.
 - [@stemkoski] (https://github.com/stemkoski) For his helpful demos and for the great textures taken from [here] (https://github.com/stemkoski/stemkoski.github.com/tree/master/Three.js/images).
 - [LearningThreeJS] (http://learningthreejs.com/) for the helpful tutorials.
