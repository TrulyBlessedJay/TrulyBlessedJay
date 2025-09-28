$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 650, 1400, 20, "green");       
createPlatform(200, 500, 120, 20, "purple");     
createPlatform(600, 400, 200, 20, "blue");       
createPlatform(950, 320, 100, 20, "orange");     
createPlatform(1200, 220, 150, 20, "red");



    // TODO 3 - Create Collectables
createCollectable("diamond", 220, 450, 0, 0);    
createCollectable("grace", 1000, 280, 0, 0.7);   
createCollectable("kennedi", 1250, 180, 0, 0);


    
    // TODO 4 - Create Cannons
createCannon("left", 400, 1800);   
createCannon("right", 250, 2200);  
createCannon("top", 800, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
