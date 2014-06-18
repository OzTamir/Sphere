if( !init() )	animate();

// init the scene
function init(){

	if( Detector.webgl ){
		renderer = new THREE.WebGLRenderer({
			antialias		: true,	// to get smoother output
			preserveDrawingBuffer	: true	// to allow screenshot
		});
		renderer.setClearColor( 0xBBBBBB, 1 );
		renderer.shadowMapEnabled = true;
		renderer.shadowMapSoft = true;
	// uncomment if webgl is required
	// }else{
	// 	Detector.addGetWebGLMessage();
	// 	return true;
	}else{
		renderer	= new THREE.CanvasRenderer();
	}
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('container').appendChild(renderer.domElement);

	// add Stats.js - https://github.com/mrdoob/stats.js
	stats = new Stats();
	stats.domElement.style.position	= 'absolute';
	stats.domElement.style.bottom	= '0px';
	document.body.appendChild( stats.domElement );

	// create a scene
	scene = new THREE.Scene();

	// put a camera in the scene
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000 );
	camera.position.set(0, 5, 5);
	scene.add(camera);

	// create a camera contol
	//cameraControls	= new THREEx.DragPanControls(camera)

	// transparently support window resize
	THREEx.WindowResize.bind(renderer, camera);
	// allow 'p' to make screenshot
	THREEx.Screenshot.bindKey(renderer);
	// allow 'f' to go fullscreen where this feature is supported
	if( THREEx.FullScreen.available() ){
		THREEx.FullScreen.bindKey();		
		document.getElementById('inlineDoc').innerHTML	+= "- <i>f</i> for fullscreen";
	}
	/* -- END OF Boilerplate -- */

	//Add light
	var light	= new THREE.AmbientLight( 0x222222 );
	scene.add( light );
	var light	= new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set(0, 10, 0);
	light.castShadow	= true;
	light.shadowCameraNear	= 0.01;
	light.shadowCameraFar	= 40;
	light.shadowCameraFov	= 45;

	light.shadowCameraLeft	= -200;
	light.shadowCameraRight	=  200;
	light.shadowCameraTop	=  200;
	light.shadowCameraBottom = -200;

	light.shadowBias	= 0.001;
	light.shadowDarkness	= 0.2;

	light.shadowMapWidth	= 1024;
	light.shadowMapHeight	= 1024;
	scene.add( light );

	// Add keyboard listener
	keyboard = new THREEx.KeyboardState();
	
	// // Add sky
	var imagePrefix = "images/dawnmountain-"
	var imageSuffix = ".png"
	var directions = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"]; 
	var materialArray = [];
	for (var i = 0; i < 6; i++)
	    materialArray.push( new THREE.MeshBasicMaterial({
	        map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
	        side: THREE.BackSide
	    }));
	var skyGeometry = new THREE.BoxGeometry( 5000, 5000, 5000, 1, 1, 1 ); 
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	scene.add( skyBox );	

	// Add sphere
	var geometry = new THREE.SphereGeometry( 2, 32, 32 );
	mirrorSphereCamera = new THREE.CubeCamera( 0.1, 5000, 512 );
	scene.add( mirrorSphereCamera );
	var material = new THREE.MeshPhongMaterial( {
		envMap : mirrorSphereCamera.renderTarget,
	} );
	sphere = new THREE.Mesh( geometry, material );
	sphere.position.z = -50;
	sphere.castShadow = true;
	mirrorSphereCamera.position = sphere.position;
	scene.add( sphere );

	// Add ground
	var floorTexture = new THREE.ImageUtils.loadTexture( 'images/checkerboard.jpg' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 64, 64 );
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side:THREE.BackSide } );
	groundW = groundH = 1000;
	var floorGeometry = new THREE.PlaneGeometry(groundW, groundH, 10, 10);
	var ground = new THREE.Mesh(floorGeometry, floorMaterial);
	ground.position.y = -1.9;
	ground.rotation.x = Math.PI / 2;
	ground.receiveShadow = true;
	scene.add(ground);
}

// animation loop
function animate() {

	// loop on request animation loop
	// - it has to be at the begining of the function
	// - see details at http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	requestAnimationFrame( animate );
	if (shouldBounce) {
		bounce()
	}
	if (reachedBound) {
		boundBounce()
	}
	// do the render
	render();

	// update stats
	stats.update();
}

// render the scene
function render() {
	// Check for keyboard events and (if needed) roll the ball
	keyboardEvent();

	sphere.visible = false;
	mirrorSphereCamera.updateCubeMap( renderer, scene );
	sphere.visible = true;

	// actually render the scene
	renderer.render( scene, camera );
}