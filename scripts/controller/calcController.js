class CalcController{

    constructor()
    {   
        // _ -> Underline, quer dizer que o atributo é privado
        this._operation = [];

        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize()
    {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, functions)
    {

        events.split(' ').forEach(event => {

            element.addEventListener(event, functions, false);

        });

    }

    clearAll()
    {

        this._operation = [];

    }
    
    clearEntry()
    {

        this._operation.pop(); //O pop elimina o último elemento de um array

    }

    addOperation(value)
    {

        this._operation.push(value);//O push adiciona um elemento a última posição de um array

        console.log(this._operation);

    }

    setError()
    {
        this.displayCalc = "Error";
    }

    execBtn(value)
    {

        switch (value) {

            case 'ac':
            this.clearAll();    
            break;

            case 'ce':
            this.clearEntry();    
            break;

            case 'soma':
            this.clearEntry();    
            break;

            case 'subtracao':
            this.clearEntry();    
            break;

            case 'divisao':
            this.clearEntry();    
            break;

            case 'multiplicacao':
            this.clearEntry();    
            break;

            case 'porcento':
            this.clearEntry();    
            break;

            case 'igual':
            this.clearEntry();    
            break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
            break;

        
            default:
                this.setError();
            break;
        }

    }

    initButtonsEvents()
    {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e =>{
                
                let textBtn = btn.className.baseVal.replace("btn-", "");
                
                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer";

            });

        });

    }

    setDisplayDateTime()
    {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: '2-digit',
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime()
    {
        return this._timeEl.innerHTML;
    }

    set displayTime(value)
    {
        return this._timeEl.innerHTML = value;
    }


    get displayDate()
    { 
        return this._dateEl.innerHTML;
    }

    set displayDate(value)
    { 
        return this._dateEl.innerHTML = value;
    }


    get displayCalc()
    {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value)
    {

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate()
    {
        return new Date();
    }

    set currentDate(data)
    {
        this._currentDate = data;
    }

}