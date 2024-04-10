import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [latestProduct, setLatestProduct] = useState(null);
  const [latestUser, setLatestUser] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await axios.get('http://localhost:8000/api/productos');
        const usersResponse = await axios.get('http://localhost:8000/api/usuarios');

        setTotalProducts(productsResponse.data.meta.count);
        setTotalUsers(usersResponse.data.meta.count);

        if (productsResponse.data.data.length > 0) {
          setLatestProduct(productsResponse.data.data[0]);
        }

        if (usersResponse.data.data.length > 0) {
          setLatestUser(usersResponse.data.data[0]);
        }

        setProductList(productsResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-purple-800 text-white p-4 rounded-md">
          <h2 className="text-lg font-semibold">Total de productos: {totalProducts}</h2>
        </div>
        <div className="bg-purple-800 text-white p-4 rounded-md">
          <h2 className="text-lg font-semibold">Total de usuarios: {totalUsers}</h2>
        </div>
        {latestProduct && (
          <div className="bg-purple-800 text-white p-4 rounded-md">
            <h2 className="text-lg font-semibold">Último producto creado:</h2>
            <p>{latestProduct.nombre}</p>
          </div>
        )}
        {latestUser && (
          <div className="bg-purple-800 text-white p-4 rounded-md">
            <h2 className="text-lg font-semibold">Último usuario creado:</h2>
            <p>{latestUser.nombre}</p>
          </div>
        )}
        <div className="col-span-3 bg-purple-800 text-white p-4 rounded-md">
          <h2 className="text-lg font-semibold">Listado de productos:</h2>
          <ul>
            {productList.map(product => (
              <li key={product.id}>{product.nombre}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;