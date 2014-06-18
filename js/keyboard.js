function keyboardEvent() {
	var sphereRotSpeed = .02 
	var x = sphere.position.x,
    y = sphere.position.y,
    z = sphere.position.z;

	if( keyboard.pressed("up") && ((axisName != "z" && axisName != "Z") || (bounceVector.z != 1))) {
		if (sphere.position.z < (- ((groundH / 2) - 1))) {
			axisName = "Z";
			bounceVector.setZ(1);
			reachedBound = true;
		}
		else {
			sphere.position.z -= ballSpeed;
			sphere.rotation.x -= (23.5/180) * Math.PI;
			if (Math.abs(sphere.rotation.z > (5/180) * Math.PI)) sphere.rotation.x -= (5/180)*Math.PI;
			if (Math.abs(sphere.position.z - camera.position.z) > 20) camera.position.z -= 1;
		}
	}
	if ( keyboard.pressed("down") && ((axisName != "z" && axisName != "Z") || (bounceVector.z != -1))) {
		if (sphere.position.z > ((groundH / 2) - 1)) {
			axisName = "Z";
			bounceVector.setZ(-1);
			reachedBound = true;
		}
		else {
			sphere.position.z += ballSpeed;
			sphere.rotation.x += (23.5/180) * Math.PI;
			if (Math.abs(sphere.rotation.z > (5/180) * Math.PI))sphere.rotation.x -= (5/180)*Math.PI;
			if (Math.abs(sphere.position.z - camera.position.z) < 20) camera.position.z += 1;
		}
	}
    if (keyboard.pressed("left") && ((axisName != "x" && axisName != "X") || (bounceVector.x != 1))){ 
		if (sphere.position.x < - ((groundW / 2) - 1)) {
			axisName = "X";
			bounceVector.setX(1);
			reachedBound = true;
		}
		else {
	        sphere.position.x -= ballSpeed;
	        sphere.rotation.z += (45/180) * Math.PI;
			if (Math.abs(sphere.position.x - camera.position.x) < 20) camera.position.x -= 1;
		}
    }
    if (keyboard.pressed("right") && ((axisName != "x" && axisName != "X") || (bounceVector.x != -1))){
		if (sphere.position.x > (groundW / 2) - 1) {
			axisName = "X";
			bounceVector.setX(-1);
			reachedBound = true;
		}
		else {
	        sphere.position.x += ballSpeed;
	        sphere.rotation.z -= (45/180) * Math.PI;
			if (Math.abs(sphere.position.x - camera.position.x) > 20) camera.position.x += 1;
		}
    }

    if (keyboard.pressed("space") && !(shouldBounce)) {
    	shouldBounce = true;
    	sphere.position.y += 0.01;
    }

    if (keyboard.pressed("A")){
    	camera.position.x -= (45/180) * Math.PI;
    }
    if (keyboard.pressed("D")){
    	camera.position.x += (45/180) * Math.PI;
    }
    if (keyboard.pressed("W")){
    	camera.position.y += (45/180) * Math.PI;
    }
    if (keyboard.pressed("S")){
    	if (camera.position.y > (45/180) * Math.PI )camera.position.y -= (45/180) * Math.PI;
    }
    if (keyboard.pressed("Q")){
		camera.position.z -= ballSpeed;
    }
    if (keyboard.pressed("E")){
		camera.position.z += ballSpeed;
    }
    if (keyboard.pressed("R")) {
    	camera.position.x = 0;
    	camera.position.z = 5;
    	camera.position.y = 5;
    }
    if (keyboard.pressed("1")) {
    	ballSpeed = 1;
    	document.getElementById('speed').innerHTML = "Ball Speed: " + ballSpeed;
    }
    else if (keyboard.pressed("2")) {
    	ballSpeed = 2;
    	document.getElementById('speed').innerHTML = "Ball Speed: " + ballSpeed;
    }
    else if (keyboard.pressed("3")) {
    	ballSpeed = 3;
    	document.getElementById('speed').innerHTML = "Ball Speed: " + ballSpeed;
    }
    mirrorSphereCamera.position = sphere.position;
    camera.lookAt(sphere.position);
}