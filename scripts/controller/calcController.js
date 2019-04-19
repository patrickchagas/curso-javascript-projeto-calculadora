class CalcController{

    constructor()
    {

        // _ -> Underline, quer dizer que o atributo é privado
        this._displayCalc = "0";
        this._dataAtual;

    }

    get displayCal()
    {
        return this._displayCalc;
    }

    set displayCal(valor)
    {

        this._displayCalc = valor;

    }

    get dataAtual()
    {
        return this._dataAtual;
    }

    set dataAtual(data)
    {
        this._dataAtual = data;
    }

}