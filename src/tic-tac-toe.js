class TicTacToe {
    currentPlayer = 'x';
    gamefield = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gamefield[rowIndex][columnIndex] === 'x' || this.gamefield[rowIndex][columnIndex] === 'o') {
            return;
        }

        this.gamefield[rowIndex][columnIndex] = this.currentPlayer;
        if (this.currentPlayer === 'x') {
            return this.currentPlayer = 'o'
        }
        if (this.currentPlayer === 'o') {
            return this.currentPlayer = 'x'
        }
    }

    isFinished() {
        return this.currentPlayer.getWinner();
    }

    getWinner() {
        if (this.gamefield[0][0] === 'x' && this.gamefield[0][1] === 'x' && this.gamefield[0][2] === 'x') {
            return 'x'
        }
        if (this.gamefield[0][0] === 'o' && this.gamefield[0][1] === 'o' && this.gamefield[0][2] === 'o') {
            return 'o'
        }
        if (this.gamefield[1][0] === 'x' && this.gamefield[1][1] === 'x' && this.gamefield[1][2] === 'x') {
            return 'x'
        }
        if (this.gamefield[1][0] === 'o' && this.gamefield[1][1] === 'o' && this.gamefield[1][2] === 'o') {
            return 'o'
        }
        if (this.gamefield[2][0] === 'x' && this.gamefield[2][1] === 'x' && this.gamefield[2][2] === 'x') {
            return 'x'
        }
        if (this.gamefield[2][0] === 'o' && this.gamefield[2][1] === 'o' && this.gamefield[2][2] === 'o') {
            return 'o'
        }
        if (this.gamefield[0][0] === 'x' && this.gamefield[1][0] === 'x' && this.gamefield[2][0] === 'x') {
            return 'x'
        }
        if (this.gamefield[0][0] === 'o' && this.gamefield[1][0] === 'o' && this.gamefield[2][0] === 'o') {
            return 'o'
        }
        if (this.gamefield[0][1] === 'x' && this.gamefield[1][1] === 'x' && this.gamefield[2][1] === 'x') {
            return 'x'
        }
        if (this.gamefield[0][1] === 'o' && this.gamefield[1][1] === 'o' && this.gamefield[2][1] === 'o') {
            return 'o'
        }
        if (this.gamefield[0][2] === 'x' && this.gamefield[1][2] === 'x' && this.gamefield[2][2] === 'x') {
            return 'x'
        }
        if (this.gamefield[0][2] === 'o' && this.gamefield[1][2] === 'o' && this.gamefield[2][2] === 'o') {
            return 'o'
        }
        if (this.gamefield[0][0] === 'x' && this.gamefield[1][1] === 'x' && this.gamefield[2][2] === 'x') {
            return 'x'
        }
        if (this.gamefield[0][0] === 'o' && this.gamefield[1][1] === 'o' && this.gamefield[2][2] === 'o') {
            return 'o'
        }
        if (this.gamefield[2][0] === 'x' && this.gamefield[1][1] === 'x' && this.gamefield[0][2] === 'x') {
            return 'x'
        }
        if (this.gamefield[2][0] === 'o' && this.gamefield[1][1] === 'o' && this.gamefield[0][2] === 'o') {
            return 'o'
        }
        return null;


    }

    noMoreTurns() {
        for (let i = 0; i < this.gamefield.length; i++) {
            for (let j = 0; j < this.gamefield[i].length; j++) {
                if (this.gamefield[i][j] === null) {
                    false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (currentPlayer.isFinished() && currentPlayer.getWinner() === 'null') {
            return true;
        } else { return false }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gamefield[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;

