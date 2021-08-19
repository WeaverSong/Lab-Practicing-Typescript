var dice = [];
var AddElement = function (type, parent, text, properties, eventListeners) {
    var NewElement = document.createElement(type);
    if (text !== undefined)
        NewElement.textContent = text;
    for (var key in properties) {
        NewElement[key] = properties[key];
    }
    for (var key in eventListeners) {
        NewElement.addEventListener(key, eventListeners[key]);
    }
    if (parent)
        parent.appendChild(NewElement);
    return NewElement;
};
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.roll = function () {
            this.value = Math.ceil(Math.random() * 6);
            this.html.textContent = this.value;
        };
        this["delete"] = function () {
            dice.splice(dice.indexOf(this), 1);
            this.html.remove();
        };
        this.html = AddElement('div', DiceContainter, '', { className: "die" }, {
            click: function () {
                _this.roll();
            },
            dblclick: function () {
                _this["delete"]();
            }
        });
        this.roll();
    }
    ;
    return Die;
}());
var DiceContainter = document.getElementById("dice-container");
document.getElementById("new-die").addEventListener('click', function () {
    dice.push(new Die());
});
document.getElementById("roll-dice").addEventListener('click', function () {
    dice.forEach(function (i) {
        i.roll();
    });
});
document.getElementById("sum-dice").addEventListener('click', function () {
    alert(dice.reduce(function (lastVal, currentVal) {
        return lastVal + currentVal.value;
    }, 0));
});
document.getElementById("del-dice").addEventListener('click', function () {
    while (dice.length > 0) {
        dice[0]["delete"]();
    }
});
