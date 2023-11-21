class SonAccount {
    
        balanceInit!: number
        firstDeposit!:number;
        secondDeposit!: number;
        firstWithdraw!:number;
        secondWithdraw!:number
    
        constructor (_balanceInit:number,_firstDeposit:number, _secondDeposit:number, _firstWithdraw:number, _secondWithdraw:number) {
           this.balanceInit = _balanceInit
            this.firstDeposit = _firstDeposit
           this.secondDeposit= _secondDeposit  
          this.firstWithdraw =  _firstWithdraw 
           this.secondWithdraw= _secondWithdraw 
        }

        balanceTotal(): number {
            const currentBalance = this.balanceInit+ (this.firstDeposit + this.secondDeposit) - (this.firstWithdraw + this.secondWithdraw)
            return currentBalance
        }
        
        
}

let sonAccountBalance = new SonAccount(0,500,800,400,400)
console.log(sonAccountBalance.balanceTotal())

class MotherAccount extends SonAccount {
    constructor(_balanceInit:number, _firstDeposit:number, _secondDeposit:number, _firstWithdraw:number, _secondWithdraw:number){
        super(_balanceInit, _firstDeposit, _secondDeposit, _firstWithdraw, _secondWithdraw)
    }

     interestCalc ():number {
        const currentBalance = this.balanceInit + (this.firstDeposit + this.secondDeposit) - (this.firstWithdraw + this.secondWithdraw)
        return (currentBalance * 10) / 100
    }

}
let motherAccountBalance = new MotherAccount(0,1100,750,250,600)
console.log(`L'interesse ammonta a: ${motherAccountBalance.interestCalc()}. Saldo attuale: ${motherAccountBalance.balanceTotal()}`)