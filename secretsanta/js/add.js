function ListModel(names){
	this._names = names;
	this._selectedIndex = -1;

	this.nameAdded = new MVCEvent(this);
	this.nameDeleted = new MVCEvent(this);
}

ListModel.prototype = {
	getNames : function() {
		return [].concat(this._names)
	},

	addName : function(name) {
		this._names.push(name);
		this.nameAdded.notify({ name : name})
	},

	deleteName : function(index) {
		var name;

		name = this._names(index);
		this._names.splice(index,1);
		this.nameDeleted.notify({ name : name});
	}
};

function MVCEvent(sender) {
    this._sender = sender;
    this._listeners = [];
    
    var _this=this;
}

MVCEvent.prototype = {
    attach : function (listener) {
        this._listeners.push(listener);
    },
    notify : function (args) {
        var index;

        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    }
};

function ListView(model, elements) {
	this._model = model;
	this._elements = elements;

	this.addButtonClicked = new MVCEvent(this);
	this.delButtonClicked = new MVCEvent(this);

	var _this = this;

	this._model.nameAdded.attach(function () {
		_this.rebuildList();
	});
	this._model.nameDeleted.attach(function () {
		_this.rebuildList();
	});

	this._elements.addButton.onclick = function () {
        _this.addButtonClicked.notify();
    };
    // this._elements.delButton.onclick = function () {
    //     _this.delButtonClicked.notify();
    // };

}

ListView.prototype = {
	show : function () {
		this.rebuildList();
	},

	rebuildList : function () {
		var list = this._elements.list;
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		}

		var names = this._model.getNames();
		for (var i=0; i < names.length ; i++) {
			var newli = document.createElement('li');
			var cb = document.createElement('input');
			cb.type = 'checkbox';
			var node = document.createTextNode(names[i]);
			newli.appendChild(cb);
			newli.appendChild(node);
			list.appendChild(newli);
		}
	}
};

function ListController(model, view) {
	this._model = model;
	this._view = view;

	var _this = this;

	this._view.addButtonClicked.attach(function () {
		_this.addNames();
	});
	this._view.delButtonClicked.attach(function () {
        _this.delName();
    });
}

ListController.prototype = {
	addNames : function () {
		var i;
		var form = document.getElementById('5names');
		for (i=0; i<5; i++) {
			var name = form.elements[i].value;
			console.log(name);
			if (name != "" && name != null){
				this._model.addName(name);
			}
			clearField(form.elements[i], name);
		}

	},
	delName :function () {

	}
};

function clearField(input, val) {
	if (input.value==val) {
		input.value='';
	}
}
