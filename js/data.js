// Game Variables
var stats, scene, renderer;
var camera, cameraControls, mirrorSphereCamera;
var keyboard, sphere, ground, grassTex;
var groundW, groundH;

// Ball setting
var ballSpeed = 1;

// Bounce Variables
var bounceConst = 3.5;
var bounceFactor = bounceConst;
var subBounceConst = bounceConst - 0.5;
var subBounceCount = subBounceConst;
var shouldBounce = false;

// Bounderies Bounce Variables
var boundConst = 2.5;
var boundFactor = boundConst;
var reachedBound = false;
var bounceVector = new THREE.Vector3(0, 0, 0);
var axisName;