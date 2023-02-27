console.log('conection with main.js is OK');

const getResponse = document.querySelector('#get-response');

getResponse.addEventListener('click', () => { bringData() });

function bringData() {
    const url = 'https://mindicador.cl/api/dolar';
    const XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.send();

    XHR.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            let response = document.querySelector('#response');
            response.innerHTML = "";

            let i = 0;

            for (let item of data.serie) {
                response.innerHTML += `
                <li> ${item.fecha.slice(0,10)} </li>
                <li>$ ${item.valor} </li>
                `
                i++;
                if(i>=5){
                    break;
                }
            }
            
        }
        else {
            return response.innerHTML = "an error was ocurried";
        }
    }




}

