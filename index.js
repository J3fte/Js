class BowlingGame{
    constructor(){
        this.arrayPrincipal = []
    }
    shoot(thrownBowling){
        return Math.round(Math.random() * thrownBowling)
    }
    Game(){
        for (let i = 0; i < 10; i++) {
            let arraysecunadrio = [];
            for (let j = 0; j < 4; j++) {
              if (j === 0) {
                const tiro = this.shoot(10);
                arraysecunadrio.push(tiro);
              } else if (j === 1) {
                if (arraysecunadrio[0] < 10) {
                  const tiro = this.shoot(10 - arraysecunadrio[0]);
                  arraysecunadrio.push(tiro);
                } else {
                  const tiro = this.shoot(10);
                  arraysecunadrio.push(tiro);
                }
              } else if (j === 2) {
                if (
                  this.isSpare(arraysecunadrio[0], arraysecunadrio[1]) ||
                  arraysecunadrio[0] === 10
                ) {
                  const tiro = this.shoot(10);
                  arraysecunadrio.push(tiro);
                } else {
                  arraysecunadrio.push(0);
                }
              } else if (j === 3) {
                let total;
                if (i === 0) {
                  const totalTiros = this.sumaTiros(
                    arraysecunadrio[0],
                    arraysecunadrio[1],
                    arraysecunadrio[2]
                  );
                  arraysecunadrio.push(totalTiros);
                } else {
                  const totalTiros = this.sumaTiros(
                    arraysecunadrio[0],
                    arraysecunadrio[1],
                    arraysecunadrio[2]
                  );
                  total = this.sumaTirosAnteriores(
                    totalTiros,
                    this.arrayPrincipal[i - 1][3]
                  );
                  arraysecunadrio.push(total);
                }
              }
            }
            this.arrayPrincipal.push(arraysecunadrio);
          }
          return this.arrayPrincipal;
        }
    isSpare(shoot1,shoot2){
        return shoot1 +shoot2
    }
    sumaTiros(tiro1, tiro2, tiro3) {
        return tiro1 + tiro2 + tiro3;
      }
    
    sumaTirosAnteriores(sumaAnterior, sumaActual) {
        return sumaAnterior + sumaActual;
    }
}


const bowlingGame = new BowlingGame()
console.log(bowlingGame.Game());
