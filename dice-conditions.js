Hooks.on("init", () => {
    //Add them to the other icons
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/c.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/s.png");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/b.png");

    /*in case you only want your icons and no other icons you can uncomment the line bellow and set your image paths:*/
    //CONFIG.statusEffects = ["modules/genesys-helper/die/b.png", "modules/genesys-helper/die/s.png", "modules/genesys-helper/die/c.png"]
});
