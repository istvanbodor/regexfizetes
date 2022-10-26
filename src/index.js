"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById("fizetes")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let nevellenorzo = /[a-z]{1,}/;
        let nev = (_a = document.getElementById('nev')) === null || _a === void 0 ? void 0 : _a.value;
        let orszagellenorzo = /[a-z]{1,}/;
        let orszag = (_b = document.getElementById('orszag')) === null || _b === void 0 ? void 0 : _b.value;
        let varosellenorzo = /[a-z]{1,}/;
        let varos = (_c = document.getElementById('varos')) === null || _c === void 0 ? void 0 : _c.value;
        let utcaellenorzo = /[a-z 0-9]{1,}/;
        let utca = (_d = document.getElementById('utca')) === null || _d === void 0 ? void 0 : _d.value;
        let iranyitoszamellenorzo = /[A-Z0-9]{1,}/;
        let iranyitoszam = (_e = document.getElementById('iranyitoszam')) === null || _e === void 0 ? void 0 : _e.value;
        let kartyaellenorzo = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
        let kartya = (_f = document.getElementById('kartya')) === null || _f === void 0 ? void 0 : _f.value;
        let cvcellenorzo = /[0-9]{3}/;
        let cvc = (_g = document.getElementById('cvc')) === null || _g === void 0 ? void 0 : _g.value;
        let kartyanevellenorzo = /[a-zA-Z" "]/;
        let kartyanev = (_h = document.getElementById('kartyanev')) === null || _h === void 0 ? void 0 : _h.value;
        if (!nevellenorzo.test(nev)) {
            alert("A név mező helytelen");
        }
        else if (!orszagellenorzo.test(orszag)) {
            alert("Az ország mező helytelen");
        }
        else if (!varosellenorzo.test(varos)) {
            alert("A város mező helytelen");
        }
        else if (!utcaellenorzo.test(utca)) {
            alert("Az utca mező helytelen");
        }
        else if (!iranyitoszamellenorzo.test(iranyitoszam)) {
            alert("Az irányítószám mező helytelen");
        }
        else if (!kartyaellenorzo.test(kartya)) {
            alert("A kártya mező helytelen");
        }
        else if (!cvcellenorzo.test(cvc)) {
            alert("A cvc mező helytelen");
        }
        else if (!kartyanevellenorzo.test(kartyanev)) {
            alert("A kártyára írt név mező helytelen");
        }
        else {
            document.body.innerHTML = "Siker";
        }
    });
});
