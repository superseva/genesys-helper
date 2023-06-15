Hooks.on("setup", () => {
    //Add them to the other icons
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-blue.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-black.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-green.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-purple.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-yellow.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-red.png");

    /*in case you only want your icons and no other icons you can uncomment the line bellow and set your image paths:*/
    //CONFIG.statusEffects = ["modules/genesys-helper/die/b.png", "modules/genesys-helper/die/s.png", "modules/genesys-helper/die/c.png"]
});
