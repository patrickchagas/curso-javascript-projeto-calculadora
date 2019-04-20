class CalcController{

    constructor()
    {   
        // _ -> Underline, quer dizer que o atributo é privado
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

    initButtonsEvents()
    {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e =>{

                console.log(btn.className.baseVal.replace("btn-", ""));
    
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


    get displayCal()
    {
        return this._displayCalcEl.innerHTML;
    }

    set displayCal(value)
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