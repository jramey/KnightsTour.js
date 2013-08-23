function Knight() {
    this.currentPosition = new Coordinate();

    this.visitSpace = function visitSpace(space) { 
        this.currentPosition.x = space.x;
        this.currentPosition.y = space.y;
    }
}