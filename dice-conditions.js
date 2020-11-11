Hooks.on("init", () => {
    CONFIG.statusEffects.unshift("assets/genesys/die/b.png");
    CONFIG.statusEffects.unshift("assets/genesys/die/s.png");
    CONFIG.statusEffects.unshift("assets/genesys/die/c.png");

    /*in case you only want your icons uncomment the line bellow and set your image paths:*/
    //CONFIG.statusEffects = ["assets/genesys/die/b.png", "assets/genesys/die/s.png", "assets/genesys/die/c.png"]
});
