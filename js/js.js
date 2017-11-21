
var options = [
    {selector: '.class', offset: 200, callback: customCallbackFunc },
    {selector: '.other-class', offset: 200, callback: function() {
        customCallbackFunc();

    } },
];
Materialize.scrollFire(options);

$(documento).ready(function () {})
$(".button-collapse").sideNav();
console.log("dddddd");
