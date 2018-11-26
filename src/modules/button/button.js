var Button = function(parent, options){
    this.options = {
        label: options.label ? options.label : '',
        callback: options.callback ? options.callback : undefined,
        className : options.className ? options.className : ''
    };

    this.initialize = function(){
        this.buttonElement = DomUtils.create('div', parent, this.options.className);
        this.buttonElement.innerHTML = this.options.label;
        this.buttonElement.onclick = this.onClick.bind(this);
        this.buttonElement.onmouseenter = this.onMouseEnter.bind(this);
        this.buttonElement.onmouseleave = this.onMouseLeave.bind(this);
        this.buttonElement.onmousedown = this.onMouseDown.bind(this);
        this.buttonElement.onmouseup = this.onMouseUp.bind(this);
    };

    this.onClick = function (e){
        if(this.options.callback){
            this.options.callback(e);
        }
    };

    this.onMouseEnter = function (e){
        DomUtils.addClassName(this.buttonElement, 'mouse-over');
    };

    this.onMouseDown = function(e){
        DomUtils.removeClassName(this.buttonElement, 'mouse-over');
        DomUtils.addClassName(this.buttonElement, 'mouse-down');
    };

    this.onMouseLeave = function(e){
        DomUtils.removeClassName(this.buttonElement, 'mouse-over');
        DomUtils.removeClassName(this.buttonElement, 'mouse-down');
    };

    this.onMouseUp = function(e){
        DomUtils.removeClassName(this.buttonElement, 'mouse-down');
        DomUtils.addClassName(this.buttonElement, 'mouse-over');
    }

    this.initialize();
}