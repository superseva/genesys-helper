Hooks.on("init", () => {
    //Add them to the other icons
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-blue.webp");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-black.webp");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-green.webp");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-purple.webp");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-yellow.webp");
    CONFIG.statusEffects.unshift("modules/genesys-helper/die/die-red.webp");

    /*in case you only want your icons and no other icons you can uncomment the line bellow and set your image paths:*/
    //CONFIG.statusEffects = ["modules/genesys-helper/die/b.webp", "modules/genesys-helper/die/s.webp", "modules/genesys-helper/die/c.webp"]
});
