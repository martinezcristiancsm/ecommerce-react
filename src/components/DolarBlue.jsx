import React, { useEffect, useState } from 'react';
import './dolarblue.css';

function App() {
  const [precioCompra, setPrecioCompra] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');

  const api = "https://dolarapi.com/v1/dolares/blue";

  useEffect(() => {
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error código Nº: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPrecioCompra(`$${data.compra}`);
        setPrecioVenta(`$${data.venta}`);
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  }, []);

  return (
    <div>
      <div>
        <h4 className="text-small">Cotización dolar<br />Compra:{precioCompra} <br /> Venta:{precioVenta}</h4>
      </div>
    </div>
  );
}

export default App;

