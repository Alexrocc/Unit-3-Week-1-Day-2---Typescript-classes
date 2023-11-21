var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit, _firstDeposit, _secondDeposit, _firstWithdraw, _secondWithdraw) {
        this.balanceInit = _balanceInit;
        this.firstDeposit = _firstDeposit;
        this.secondDeposit = _secondDeposit;
        this.firstWithdraw = _firstWithdraw;
        this.secondWithdraw = _secondWithdraw;
    }
    SonAccount.prototype.balanceTotal = function () {
        var currentBalance = this.balanceInit + (this.firstDeposit + this.secondDeposit) - (this.firstWithdraw + this.secondWithdraw);
        return currentBalance;
    };
    return SonAccount;
}());
var sonAccountBalance = new SonAccount(0, 500, 800, 400, 400);
console.log(sonAccountBalance.balanceTotal());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit, _firstDeposit, _secondDeposit, _firstWithdraw, _secondWithdraw) {
        return _super.call(this, _balanceInit, _firstDeposit, _secondDeposit, _firstWithdraw, _secondWithdraw) || this;
    }
    MotherAccount.prototype.interestCalc = function () {
        var currentBalance = this.balanceInit + (this.firstDeposit + this.secondDeposit) - (this.firstWithdraw + this.secondWithdraw);
        return (currentBalance * 10) / 100;
    };
    return MotherAccount;
}(SonAccount));
var motherAccountBalance = new MotherAccount(0, 1100, 750, 250, 600);
console.log("L'interesse ammonta a: ".concat(motherAccountBalance.interestCalc(), ". Saldo attuale: ").concat(motherAccountBalance.balanceTotal()));
