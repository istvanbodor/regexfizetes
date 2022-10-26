document.addEventListener("DOMContentLoaded", ()=> {

        document.getElementById("fizetes")?.addEventListener("click", ()=>{


                let nevellenorzo = /[a-z]{1,}/
                let nev : string= (document.getElementById('nev') as HTMLInputElement)?.value;

                let orszagellenorzo = /[a-z]{1,}/
                let orszag : string= (document.getElementById('orszag') as HTMLInputElement)?.value;
                
                let varosellenorzo = /[a-z]{1,}/
                let varos : string= (document.getElementById('varos') as HTMLInputElement)?.value;

                let utcaellenorzo = /[a-z 0-9]{1,}/
                let utca : string= (document.getElementById('utca') as HTMLInputElement)?.value;
                
                let iranyitoszamellenorzo = /[A-Z0-9]{1,}/
                let iranyitoszam : string= (document.getElementById('iranyitoszam') as HTMLInputElement)?.value;
                
                let kartyaellenorzo = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/
                let kartya : string= (document.getElementById('kartya') as HTMLInputElement)?.value;
                
                let cvcellenorzo = /[0-9]{3}/
                let cvc : string= (document.getElementById('cvc') as HTMLInputElement)?.value;

                let kartyanevellenorzo = /[a-zA-Z" "]/
                let kartyanev : string= (document.getElementById('kartyanev') as HTMLInputElement)?.value;
                
                if (!nevellenorzo.test(nev)){
                    alert("A név mező helytelen");
                }
                else if (!orszagellenorzo.test(orszag))
                {
                    alert("Az ország mező helytelen");
                }
                else if (!varosellenorzo.test(varos))
                {
                    alert("A város mező helytelen");
                }
                else if (!utcaellenorzo.test(utca))
                {
                    alert("Az utca mező helytelen");
                }   
                else if (!iranyitoszamellenorzo.test(iranyitoszam))
                {
                    alert("Az irányítószám mező helytelen");
                }
                else if (!kartyaellenorzo.test(kartya))
                {
                    alert("A kártya mező helytelen");
                }
                else if (!cvcellenorzo.test(cvc))
                {
                    alert("A cvc mező helytelen");
                }
                else if (!kartyanevellenorzo.test(kartyanev))
                {
                    alert("A kártyára írt név mező helytelen");
                }
                else {
                    document.body.innerHTML ="Siker";

                }











        });
});