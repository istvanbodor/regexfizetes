document.addEventListener("DOMContentLoaded", ()=> {

        document.getElementById("fizetes")?.addEventListener("click", ()=>{


                let nevellenorzo =   /* /^[a-z]{1,}$/ */ /^\p{L}{1,}$/gu;
                let nev : string= (document.getElementById('nev') as HTMLInputElement)?.value;

                let orszagellenorzo = /^\p{L}{1,}$/gu;
                let orszag : string= (document.getElementById('orszag') as HTMLInputElement)?.value;
                
                let varosellenorzo = /^\p{L}{1,}$/gu;
                let varos : string= (document.getElementById('varos') as HTMLInputElement)?.value;

                let utcaellenorzo = /^[a-z 0-9]{1,}$/
                let utca : string= (document.getElementById('utca') as HTMLInputElement)?.value;
                
                let iranyitoszamellenorzo = /^[A-Z0-9]{1,}$/
                let iranyitoszam : string= (document.getElementById('iranyitoszam') as HTMLInputElement)?.value;
                
                let kartyaellenorzo = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
                let kartya : string= (document.getElementById('kartya') as HTMLInputElement)?.value;
                
                let cvcellenorzo = /^[0-9]{3}$/
                let cvc : string= (document.getElementById('cvc') as HTMLInputElement)?.value;

                let kartyanevellenorzo = /^[a-zA-Z" "]{1,}$/
                let kartyanev : string= (document.getElementById('kartyanev') as HTMLInputElement)?.value;
                
                if (!nevellenorzo.test(nev)){
                   (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A név mező helytelen"
                }
                else if (!orszagellenorzo.test(orszag))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "Az ország mező helytelen"
                    
                }
                else if (!varosellenorzo.test(varos))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A város mező helytelen"
                }
                else if (!utcaellenorzo.test(utca))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "Az utca mező helytelen"
                }   
                else if (!iranyitoszamellenorzo.test(iranyitoszam))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "Az irányítószám mező helytelen"
                }
                else if (!kartyaellenorzo.test(kartya))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A bankkártya mező helytelen"
                }
                else if (!cvcellenorzo.test(cvc))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A cvc mező helytelen"
                }
                else if (!kartyanevellenorzo.test(kartyanev))
                {
                    (document.getElementById('hiba') as HTMLParagraphElement).textContent = "A kártyára írt név mező helytelen"
                }
                else {
                    document.body.innerHTML ="Siker";
                    document.body.style.color = "green";
                    document.body.style.fontSize = "50px";
                    document.body.style.marginTop = "200px";

                }



        });
});