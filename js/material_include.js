var createScene = function (engine, canvas, baseurl) {
    var scene = new BABYLON.Scene(engine);

    //Create a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(-60, 60, 80), scene);

    //Create an Arc Rotate Camera - aimed negative z this time
    <!-- var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, 1.0, 110, BABYLON.Vector3.Zero(), scene); -->
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 110, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //Creation of 6 spheres
    var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 10.0, 9.0, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 2.0, 9.0, scene);//Only two segments
    var sphere3 = BABYLON.Mesh.CreateSphere("Sphere3", 10.0, 9.0, scene);
    var sphere4 = BABYLON.Mesh.CreateSphere("Sphere4", 10.0, 9.0, scene);
    var sphere5 = BABYLON.Mesh.CreateSphere("Sphere5", 10.0, 9.0, scene);
    var sphere6 = BABYLON.Mesh.CreateSphere("Sphere6", 10.0, 9.0, scene);

    //Position the spheres
    sphere1.position.x = 40;
    sphere2.position.x = 25;
    sphere3.position.x = 10;
    sphere4.position.x = -5;
    sphere5.position.x = -20;
    sphere6.position.x = -35;

    //Creation of a plane
    var plane = BABYLON.Mesh.CreatePlane("plane", 120, scene);
    plane.position.y = -5;
    plane.rotation.x = Math.PI / 2;

    //Creation of a material with wireFrame
    var materialSphere1 = new BABYLON.StandardMaterial("texture1", scene);
    materialSphere1.wireframe = true;

    //Creation of a red material with alpha
    var materialSphere2 = new BABYLON.StandardMaterial("texture2", scene);
    materialSphere2.diffuseColor = new BABYLON.Color3(1, 0, 0); //Red
    materialSphere2.alpha = 0.3;

    //Creation of a material with an image texture
    var materialSphere3 = new BABYLON.StandardMaterial("texture3", scene);
    materialSphere3.diffuseTexture = new BABYLON.Texture(baseurl + "/textures/misc.jpg", scene);

    //Creation of a material with translated texture
    var materialSphere4 = new BABYLON.StandardMaterial("texture4", scene);
    materialSphere4.diffuseTexture = new BABYLON.Texture(baseurl + "/textures/misc.jpg", scene);
    materialSphere4.diffuseTexture.vOffset = 0.1;//Vertical offset of 10%
    materialSphere4.diffuseTexture.uOffset = 0.4;//Horizontal offset of 40%

    //Creation of a material with an alpha texture
    var materialSphere5 = new BABYLON.StandardMaterial("texture5", scene);
    materialSphere5.diffuseTexture = new BABYLON.Texture(baseurl + "/textures/tree.png", scene);
    materialSphere5.diffuseTexture.hasAlpha = true;//Has an alpha

    //Creation of a material and show all the faces
    var materialSphere6 = new BABYLON.StandardMaterial("texture6", scene);
    materialSphere6.diffuseTexture = new BABYLON.Texture(baseurl + "/textures/tree.png", scene);
    materialSphere6.diffuseTexture.hasAlpha = true;//Have an alpha
    materialSphere6.backFaceCulling = false;//Show all the faces of the element

    //Creation of a repeated textured material
    var materialPlane = new BABYLON.StandardMaterial("texturePlane", scene);
    materialPlane.diffuseTexture = new BABYLON.Texture(baseurl + "/textures/grass.jpg", scene);
    materialPlane.diffuseTexture.uScale = 5.0;//Repeat 5 times on the Vertical Axes
    materialPlane.diffuseTexture.vScale = 5.0;//Repeat 5 times on the Horizontal Axes
    materialPlane.backFaceCulling = false;//Always show the front and the back of an element

    //Apply the materials to meshes
    sphere1.material = materialSphere1;
    sphere2.material = materialSphere2;

    sphere3.material = materialSphere3;
    sphere4.material = materialSphere4;

    sphere5.material = materialSphere5;
    sphere6.material = materialSphere6;

    plane.material = materialPlane;

    var createAxis = function (length, radius) {
        var l0 = BABYLON.Mesh.CreateLines("l0", [
            new BABYLON.Vector3(0, 0, 0),
            new BABYLON.Vector3(length, 0, 0)
            ], scene);
        var s0 = BABYLON.Mesh.CreateSphere("s0", length, radius, scene);
        s0.position.x = length;
        var red = new BABYLON.StandardMaterial("red", scene);
        red.diffuseColor = new BABYLON.Color3(1, 0, 0); //Red
        s0.material = red;

        var s1 = BABYLON.Mesh.CreateLines("l1", [
            new BABYLON.Vector3(0, 0, 0),
            new BABYLON.Vector3(0, length, 0)
            ], scene);
        var s1 = BABYLON.Mesh.CreateSphere("s1", length, radius, scene);
        s1.position.y = length;
        var green = new BABYLON.StandardMaterial("green", scene);
        green.diffuseColor = new BABYLON.Color3(0, 1, 0); //Gree
        s1.material = green;
        
        var s2 = BABYLON.Mesh.CreateLines("l2", [
            new BABYLON.Vector3(0, 0, 0),
            new BABYLON.Vector3(0, 0, length)
            ], scene);
        var s2 = BABYLON.Mesh.CreateSphere("s2", length, radius, scene);
        s2.position.z = length;
        var blue = new BABYLON.StandardMaterial("blue", scene);
        blue.diffuseColor = new BABYLON.Color3(0, 0, 1); //Blue
        s2.material = blue;
    };
    createAxis(10, 1);

    return scene;
};
