const valor = document.getElementById('valor');
const conversor = document.getElementById('conversor');
const result = document.getElementById('result');

// result.disabled = true;



function convertirDivisas() {
    //const field = e.target;
    const fieldValue = valor.value;
    const selectConversor = conversor.value;
    const regex = new RegExp(/^\d+$/);
    
    if (fieldValue.trim().length > 0 && regex.test(fieldValue)) {
        let conversion;
        let resultado=0;

        if (selectConversor === 'dolar') {
            conversion = 0.00024;
            resultado = fieldValue * conversion;
            //result.textContent = resultado.toFixed(2);
        }else if (selectConversor === 'euro') {
            conversion = 0.00023;
            resultado = fieldValue * conversion;
        }else if (selectConversor === 'libraEsterlina') {
            conversion = 0.0002;
            resultado = fieldValue * conversion;
        }else if (selectConversor === 'francoSuizo') {
            conversion = 0.00022;
            resultado = fieldValue* conversion;
        }
        result.textContent = resultado.toFixed(2)
    }else {
        result.textContent = 'Ingrese un valor valido';
    }
        
}



