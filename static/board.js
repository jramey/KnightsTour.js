function Board(knight) {
    this.knight = knight;
    this.rows = 8;
    this.columns = 8;
    this.visitedSpaces = [];
    this.turns = 0;

    this.isLegalMove = function isLegalMove(space) {
        return this.hasSpaceBeenVisited(space) == false && Math.abs(space.x - knight.currentPosition.x) == 2 && Math.abs(space.y - knight.currentPosition.y) == 1
            || this.hasSpaceBeenVisited(space) == false && Math.abs(space.x - knight.currentPosition.x) == 1 && Math.abs(space.y - knight.currentPosition.y) == 2
            || this.turns == 0
    }

    this.addToVisitedSpaces = function addToVisitedSpaces(space) {
        this.visitedSpaces.push(space);
        this.incrementTurn();
    }

    this.hasSpaceBeenVisited = function hasSpaceBeenVisited(space) {
        for (var i = 0; i < this.visitedSpaces.length; i++)
            if (space.x === this.visitedSpaces[i].x && space.y == this.visitedSpaces[i].y)
                return true;

        return false;
    }

    this.undoMove = function undoMoce() {
        this.visitedSpaces.pop();
        this.regressTurn();

        return this.visitedSpaces[this.visitedSpaces.length - 1];
    }

    this.incrementTurn = function incrementTurn() {
        this.turns++;
    }

    this.regressTurn = function regressTurn() {
        this.turns--;
    }
}