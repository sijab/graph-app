export default class Helper {
    public stringToArray(data: string) {
        return data.split(/\n|e|E/g).map(i => i.split(' ').map(x => Number(x))).filter((i: any) => i != 0);
    }

    public matrixToAdjList(adjMatrix: string) {
        const arr = this.stringToArray(adjMatrix);
        return arr.map((a: Array<number>) => a.map((v: number, i: number) => Number(v) ? Number(i) : -1).filter((v: number) => Number(v) !== -1))
    }
}