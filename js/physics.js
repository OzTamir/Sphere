function boundBounce() {
	if (boundFactor <= 0){
		reachedBound = false;
		boundFactor = boundConst;
		axisName = "";
	}
	else {
		switch (axisName) {
			case "x":
			case "X":
				sphere.position.x += bounceVector.x * bounceFactor;
				camera.position.x += bounceVector.x * bounceFactor;
				break;
			case "z":
			case "Z":
				sphere.position.z += bounceVector.z * bounceFactor;
				camera.position.z += bounceVector.z * bounceFactor;
				break;
			default:
				break;
		}
		boundFactor -= 0.2
	}
	mirrorSphereCamera.position = sphere.position;
}

function bounce() {
	var x = sphere.position.x,
        y = sphere.position.y,
        z = sphere.position.z;
	if (y <= 0 || (y + bounceFactor) <= 0) {
		if (subBounceCount == 0) {
			sphere.position.y = 0;
			bounceFactor = bounceConst;
			shouldBounce = false;
			subBounceCount = subBounceConst;
		}
		else {
			sphere.position.y = 0.01;
			subBounceCount -= 1;
			bounceFactor = subBounceCount + 0.5;
		}
	}
	else {
		sphere.position.y += bounceFactor;
		bounceFactor -= 0.1;
	}
	mirrorSphereCamera.position = sphere.position;
}