const params = {
    blockSize: 20,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel
    difficultLevel: 0.1,
    getColunmsAmount() {
        const width = 300
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = 400
        const boardHeight = totalHeight * ( 1 - this.headerRatio)
        return Math.floor( boardHeight / this.blockSize)
    }

}


export default params