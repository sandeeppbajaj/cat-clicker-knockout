var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpg');

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };

    this.catLevel = ko.computed(function(){
        if(this.clickCount() > 10)
          return 'Infant';
        else
          return 'New Born';
    },this);
};

ko.applyBindings(new ViewModel());
