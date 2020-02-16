/**
 *
 */
class OldAnimation {
    /**
     * Constructor to create Animation object.
     * Class is written with a horizontally aligned sprite sheet in mind -
     * please ensure sprite sheet is formatted as such through Aseprite or Marmoset Hexels.
     * @param {Image} spriteSheet   Filepath of sprite sheet.
     * @param {number} frameHeight X coordinate to begin pulling sprite
     * @param {number} frameWidth Y coordinate to begin pull
     * @param {number} sheetWidth  X coordinate to stop
     * @param {number} singleFrameTime  Y coordinate to stop
     * @param {number} frameCount of animation in ms
     * @param {boolean} loop determine if the animation should loop
     * @param {number} scale image scaling to increase or decrease size
     */
    constructor(spriteSheet, frameWidth, frameHeight, sheetWidth, singleFrameTime, frameCount, loop, scale) {
        this.spriteSheet = spriteSheet;
        this.frameWidth = frameWidth;
        this.frameDuration = singleFrameTime;
        this.frameHeight = frameHeight;
        this.sheetWidth = sheetWidth; //
        this.looping = loop;
        this.scale = scale;
        this.elapsedTime = 0;
        this.totalAnimTime = singleFrameTime * frameCount;
    }

    /**
     * Draws the current frame in the animation
     * @param tick {number} current in game time change
     * @param context {CanvasRenderingContext2D} the canvas to draw to
     * @param gamePositionX {number} x position relative to the canvas
     * @param gamePositionY {number} y position relative to the canvas
     * @param imageRow {number} the row to select which image, pass
     * @param status {string} the status of the object
     * TODO Make imageRow an optional parameter (at the end), defaulting to 0. Most enemies will ignore imageRow.
     */
    drawFrame(tick, context, gamePositionX, gamePositionY, imageRow, status) {
        this.elapsedTime += tick;
        if (this.isDone() && this.looping) {
            this.elapsedTime -= this.totalAnimTime;
        }

        const frame = this.currentFrame();
        let xIndex = frame % this.sheetWidth;
        if (status === 'idle') {
            xIndex = 0;
        }
        context.drawImage(this.spriteSheet, xIndex * this.frameWidth, imageRow * this.frameHeight,
            this.frameWidth, this.frameHeight, gamePositionX, gamePositionY,
            this.frameWidth * this.scale, this.frameHeight * this.scale);
    }

    /**
     * Gets the current frame of the animation
     * @returns {number} the current frame.
     */
    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    /**
     * Checks if the animation is done
     * @returns {boolean} true if animation has completed all frames, false otherwise
     */
    isDone() {
        return this.elapsedTime >= this.frameDuration * 2;
    }
}