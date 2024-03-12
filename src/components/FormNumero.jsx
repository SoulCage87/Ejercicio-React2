import React, { useState } from 'react'
import { alerta } from '../Alerts.js';

const FormNumero = () => {

    const [num1, setnum1] = useState('');
    const [num2, setnum2] = useState('');
    const [num3, setnum3] = useState('');
    const [result, setResult] = useState('');

    const getNum1 = (event) => {

        const { name, value } = event.target
        setnum1(value)
        console.log(value)
    }

    const getNum2 = (event) => {
        const { name, value } = event.target;
        setnum2(value)
        console.log(value)
    }

    const getNum3 = (event) => {
        const { name, value } = event.target;
        setnum3(value)
        console.log(value)
    }

    const FormulaCuadratica = () => {
      let a = parseFloat(num1);
      let b = parseFloat(num2);
      let c = parseFloat(num3);
      
      if (a === 0 & b === 0 & c === 0 ){
        alerta('los numeros deben ser mayores a 0','error')
      } else {
        let operacion = b * b - 4 * a * c;

        if (operacion >= 0){
            let x1 = (-b + Math.sqrt(operacion)) / (2 * a)
            let x2 = (-b - Math.sqrt(operacion)) / (2 * a)
            return {x1, x2};
        }else {
            return { x1: 'No tiene soluciones reales', x2: 'No tiene soluciones reales' };
        }
      }
    }

  const handlerCalcular = () => {
    const result = FormulaCuadratica();
    setResult(result)
    if (result) {
        console.log(result.x1, result.x2);
       
    } else {
        console.log("No se pudieron calcular las soluciones.");
       
    }
  }


return (
    <div>
        <nav className="navbar" style={{ backgroundColor: ' #e3f2fd' }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Formula Cuadratica</span>
            </div>
        </nav>

        <div className="container position-absolute top-50 start-50 translate-middle" id='container' >
            <div className="row">
                <div className="card shadow-lg" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Formula Cuadratica</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Ingresa los 3 numeros a calcular</h6>
                        <div className="input-group flex-nowrap m-1 mt-3">
                            <span className="input-group-text" id="addon-wrapping">a:</span>
                            <input type="number" className="form-control" placeholder="Primer Numero" onChange={getNum1} />
                        </div>
                        <div className="input-group flex-nowrap m-1 mt-3">
                            <span className="input-group-text" id="addon-wrapping">b:</span>
                            <input type="number" className="form-control" placeholder="Segundo Numero" onChange={getNum2} />
                        </div>
                        <div className="input-group flex-nowrap m-1 mt-3">
                            <span className="input-group-text" id="addon-wrapping">c:</span>
                            <input type="number" className="form-control" placeholder="Tercer Numero" onChange={getNum3} />
                        </div>
                        <a className="btn btn-success m-1 mt-3" onClick={handlerCalcular}>Calcular</a>
                    </div>
                </div>
            </div>
            <div className="container position-absolute top-50 start-50 translate-middle w-50 p-3" id='container' >
                <div className="row">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">El resultado es:</h5>
                            <p>{result ? `x1: ${result.x1}, x2: ${result.x2}` : 'Por favor, ingresa números válidos y haz clic en Calcular'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default FormNumero
