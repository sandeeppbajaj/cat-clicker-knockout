var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.nickNames = ko.observableArray(['Tabby','Bubbles','Kitty']);
    this.catLevel = ko.computed(function(){
        if(this.clickCount() > 10)
          return 'Infant';
        else
          return 'New Born';
    },this);

};

var ViewModel = function(){
    var self = this;
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function(){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());
