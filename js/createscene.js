// createScene function that creates and return the scene
var createScene = function (engine, canvas, baseurl) {
    // create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);

    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    camera.attachControl(canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

    // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
    var sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

    // move the sphere upward 1/2 of its height
    sphere.position.y = 1;

    // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
    var ground = new BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

    // return the created scene
    return scene;
}
