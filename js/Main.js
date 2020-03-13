window.onload = () => {
    const gameCanvas = document.getElementById("gameWorld");
    const gameContext = gameCanvas.getContext("2d");
    gameContext.font = "75px bold Courier";
    gameContext.fillStyle = "White";
    gameContext.textAlign = "center";
    gameContext.fillText("Loading Resources...", gameContext.canvas.width / 2, gameContext.canvas.height / 2);
    const AssetHandler = new AssetManager();
    AssetHandler.queueImage('./res/img/worlds/testBossRoom.png');
    AssetHandler.queueImage('./res/img/worlds/testBossRoom2.png');
    AssetHandler.queueJSON('./res/jsonderulo/testBossRoom.json');
    AssetHandler.queueImage("./res/img/worlds/openworld.png");
    AssetHandler.queueImage("./res/img/worlds/openworld2.png");
    AssetHandler.queueImage("./res/img/worlds/necro.png");
    AssetHandler.queueImage("./res/img/worlds/necro2.png");
    AssetHandler.queueImage("./res/img/worlds/cavebasic.png");
    AssetHandler.queueImage("./res/img/worlds/cavebasic2.png");
    AssetHandler.queueImage("./res/img/worlds/testroom.png");
    AssetHandler.queueImage("./res/img/worlds/testroom2.png");
AssetHandler.queueImage("./res/img/worlds/bluehouse.png");
AssetHandler.queueImage("./res/img/worlds/bluehouse2.png");
AssetHandler.queueImage("./res/img/hero.png");
AssetHandler.queueImage("./res/img/upgrade-bar.png");
AssetHandler.queueImage("./res/img/blinking-dot.png");
AssetHandler.queueImage("./res/img/smallchest.png");
AssetHandler.queueImage("./res/img/bigchest.png");
AssetHandler.queueImage("./res/img/smallkey.png");
AssetHandler.queueImage("./res/img/bosskey.png");
AssetHandler.queueImage("./res/img/bosslock.png");
    AssetHandler.queueImage("./res/img/dummy.png");
AssetHandler.queueImage("./res/img/lock.png");
AssetHandler.queueImage("./res/img/hero_extra.png");
AssetHandler.queueImage("./res/img/hero_bow.png");
AssetHandler.queueImage("./res/img/hit.png");
AssetHandler.queueImage("./res/img/zombie.png");
AssetHandler.queueImage("./res/img/necro.png");
AssetHandler.queueImage("./res/img/mage.png");
AssetHandler.queueImage("./res/img/beast.png");
AssetHandler.queueImage("./res/img/fireball.png");
AssetHandler.queueImage("./res/img/sniper.png");
AssetHandler.queueImage("./res/img/NecroFireball.png");
AssetHandler.queueImage("./res/img/knight.png");
AssetHandler.queueImage("./res/img/whip.png");
AssetHandler.queueImage("./res/img/whipUI.png");
    AssetHandler.queueImage("./res/img/bowUI.png");
    AssetHandler.queueImage("./res/img/bow_upgrade.png");
    AssetHandler.queueImage("./res/img/whip_upgrade.png");
AssetHandler.queueImage("./res/img/crab.png");
AssetHandler.queueImage("./res/img/horiz_arrow.png");
AssetHandler.queueImage("./res/img/vert_arrow.png");
AssetHandler.queueImage("./res/img/heart.png");
AssetHandler.queueImage("./res/img/coin.png");
AssetHandler.queueImage("./res/img/digits.png");
AssetHandler.queueImage("./res/img/keyJ.png");
AssetHandler.queueImage("./res/img/keyK.png");
AssetHandler.queueImage('./res/img/crate.png');
AssetHandler.queueImage('./res/img/chest.png');
AssetHandler.queueImage("./res/img/fountainAnimation.png");
AssetHandler.queueImage("./res/img/worm.png");
AssetHandler.queueImage("./res/img/flower.png");
AssetHandler.queueImage("./res/img/fire.png");
AssetHandler.queueImage("./res/img/letters.png");
AssetHandler.queueImage("./res/img/death.png");
AssetHandler.queueImage('./res/img/heartAnimation.png');
AssetHandler.queueImage('./res/img/bow.png');
AssetHandler.queueImage('./res/img/goldheart.png');
AssetHandler.queueImage('./res/img/coinAnimation.png');
AssetHandler.queueImage('./res/img/gate.png');
AssetHandler.queueImage("./res/img/boots.png");
AssetHandler.queueImage("./res/img/bootsUI.png");

AssetHandler.queueImage("./res/img/merchant.png");
AssetHandler.queueImage("./res/img/lever.png");
    AssetHandler.queueImage("./res/img/dungeongate.png");
AssetHandler.queueJSON('./res/jsonderulo/testroom_section1_1.json');
AssetHandler.queueJSON('./res/jsonderulo/section1_1.json');
AssetHandler.queueJSON('./res/jsonderulo/section1_2.json');
AssetHandler.queueJSON('./res/jsonderulo/section1_3.json');
AssetHandler.queueJSON('./res/jsonderulo/section1_4.json');
AssetHandler.queueJSON('./res/jsonderulo/section1_5.json');
AssetHandler.queueJSON('./res/jsonderulo/section2_1.json');
AssetHandler.queueJSON('./res/jsonderulo/section2_2.json');
AssetHandler.queueJSON('./res/jsonderulo/section2_3.json');
AssetHandler.queueJSON('./res/jsonderulo/section2_4.json');
AssetHandler.queueJSON('./res/jsonderulo/section2_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/section3_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/section3_2.json');
    AssetHandler.queueJSON('./res/jsonderulo/section3_3.json');
    AssetHandler.queueJSON('./res/jsonderulo/section3_4.json');
    AssetHandler.queueJSON('./res/jsonderulo/section3_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section1_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section1_2.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section1_3.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section1_4.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section1_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section2_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section2_2.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section2_3.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section2_4.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section2_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section3_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section3_2.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section3_3.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section3_4.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section3_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section4_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section4_2.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section4_3.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section4_4.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section4_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section5_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section5_2.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section5_3.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section5_4.json');
    AssetHandler.queueJSON('./res/jsonderulo/necro_section5_5.json');
    AssetHandler.queueJSON('./res/jsonderulo/cave_section1_1.json');
    AssetHandler.queueJSON('./res/jsonderulo/bluehouse_section1_1.json');

    AssetHandler.queueImage('./res/img/log.png');
    AssetHandler.queueImage('./res/img/log2.png');
    AssetHandler.queueImage('./res/img/worlds/wolf.png');
    AssetHandler.queueImage('./res/img/worlds/wolf2.png');
    AssetHandler.queueJSON('./res/jsonderulo/wolf_section1_1.json');
    AssetHandler.startDownload()
        .then(() => {
            const myGame = new GameEngine(gameContext, AssetHandler.assets);
            myGame.init();
            myGame.run();
        }).catch(() => {
        gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        gameContext.fillText("Error, Check Console", gameContext.canvas.width / 2, gameContext.canvas.height / 2);
    });
};