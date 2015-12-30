function createAxis(scene, length, radius) {
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