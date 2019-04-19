class CalcController{

    constructor()
    {

        // _ -> Underline, quer dizer que o atributo é privado
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize()
    {
        
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "19/04/2019";
        timeEl.innerHTML = "18:47";
    }

    get displayCal()
    {
        return this._displayCalc;
    }

    set displayCal(valor)
    {

        this._displayCalc = valor;

    }

    get currentDate()
    {
        return this._currentDate;
    }

    set currentDate(data)
    {
        this._currentDate = data;
    }

}