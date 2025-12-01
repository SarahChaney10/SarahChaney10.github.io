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

    createPlatform(900, 400, 100, 50, "black")
    createPlatform(750, 500, 100, 50, "black")
    createPlatform(600, 600, 100, 50, "black")
    createPlatform(400, 700, 100, 50, "black")
    createPlatform(1000, 450, 20, 300, "black")
    createPlatform(1200, 450, 20, 300, "black")
    createPlatform(1100, 520, 100, 20, "black")
    createPlatform(1020, 650, 100, 20, "black")
    createPlatform(500, 650, 55, 20, "black")
    createPlatform(700, 550, 55, 20, "black")
    createPlatform(500, 650, 55, 20, "black")




    // TODO 3 - Create Collectables
    
    createCollectable("coin", 900, 300, 0 ,0)
    createCollectable("coin", 100, 600, 0, 0)
    createCollectable("coin", 1120, 700, 0, 0)
    



    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000)
    createCannon("right", 500, 3500)
    createCannon("left", 500, 3000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
