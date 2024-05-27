import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Collection() {
  const [userData, setUserData] = useState([]);
  const [editableProduct, setEditableProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    id: "",
    image: "",
    price: ""
  });
  const [newProducts, setNewProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Default: no category selected

  const fetchUserData = useCallback(() => {
    let url = 'https://fakestoreapi.com/products';
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
    }
    url += `?sort=${sortOrder}`;

    Axios.get(url)
      .then((response) => {
        setUserData(response.data);
        if (response.data.length > 0) {
          // Initialize updatedProduct with details of the first product
          setUpdatedProduct(response.data[0]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [sortOrder, selectedCategory]); // Depend on sortOrder and selectedCategory

  const fetchCategories = useCallback(() => {
    Axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    fetchUserData();
    fetchCategories();
  }, [fetchUserData, fetchCategories]); // Depend on fetchUserData and fetchCategories

  const handleDelete = (id, isNew) => {
    if (!isNew) {
      // For existing products, send a delete request
      Axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          const updatedData = userData.filter(product => product.id !== id);
          setUserData(updatedData);
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    } else {
      // For new products, remove it from the newProducts state
      const updatedNewProducts = newProducts.filter(product => product.id !== id);
      setNewProducts(updatedNewProducts);
    }
  };

  const handleUpdate = () => {
    Axios.put(`https://fakestoreapi.com/products/${editableProduct.id}`, updatedProduct)
      .then(response => {
        // Update the userData state with the updated product details
        const updatedData = userData.map(product => {
          if (product.id === editableProduct.id) {
            return {
              ...product,
              title: updatedProduct.title,
              image: updatedProduct.image,
              price: updatedProduct.price
            };
          }
          return product;
        });
        setUserData(updatedData);
        setEditableProduct(null); // Reset editableProduct after updating
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleAddProduct = () => {
    Axios.post("https://fakestoreapi.com/products", updatedProduct)
      .then(response => {
        const newProduct = response.data;
        setUserData([...userData, newProduct]); // Add new product to userData state
        setNewProducts([...newProducts, newProduct]); // Add new product to newProducts state
        setUpdatedProduct({
          title: "",
          id: "",
          image: "",
          price: ""
        });
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (userData.length === 0) {
    return <div className='text-4xl text-white pt-[300px] bg-black text-center'>Loading...</div>;
  }

  return (
    <div className='bg-black pt-[100px]'>
      <h1 className='text-6xl text-white text-center font-serif'>COLLECTION</h1>
<br/><br/>
      {/* Dropdown for sorting */}
      <div className="flex justify-end mb-4 ">
        <div className="relative ">
          <label htmlFor="sort" className="text-white mr-2 ">Sort By:</label>
          <select
            id="sort"
            className="text-white bg-black border-gray-400 border-2 px-4 py-2 rounded-lg mr-4"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Dropdown for categories */}
        <div className="relative mr-8">
          <label htmlFor="category" className="text-white mr-2">Categories:</label>
          <select
            id="category"
            className="text-white bg-black border-gray-400 border-2 px-4 py-2 rounded-lg"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 pt-[100px] p-20 text-white ">
        {/* Product display */}
        {userData.map((product) => (
          <div key={product.id} className="relative DUNK overflow-hidden justify-center bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[410px] md:h-[310px] ">
            {/* Product details */}
            <button className="absolute top-2 right-2 text-base hover:text-red-700 bg-transparent text-white px-2 py-1 rounded" onClick={() => handleDelete(product.id, false)}>Delete</button>
            <button className="absolute top-2 right-16 hover:text-red-700 text-base bg-transparent text-white px-2 py-1 rounded" onClick={() => setEditableProduct(product)}>Edit</button>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <br/>  <h3>NIKE</h3>
              <h3 className="text-[22px] font-semibold italic">
                {product.title}
              </h3>
              <h3>${product.price}</h3>
              <div className="aspect-w-16 aspect-h-9 items-center flex flex-col">
                <img src={product.image} alt="M" className='h-[200px] w-[200px]  object-contain'/>
              </div>
            </Link>
            {/* Edit product form */}
            {editableProduct && editableProduct.id === product.id && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="DUNK overflow-hidden  justify-center bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[410px] w-screen md:h-[310px] flex flex-col gap-2 ">
                  <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                  <input type="text" placeholder="Title" value={updatedProduct.title} onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })} className="text-black rounded-lg mb-2" />
                  <input type="text" placeholder="ID" value={updatedProduct.id} onChange={(e) => setUpdatedProduct({ ...updatedProduct, id: e.target.value })} className="text-black rounded-lg mb-2" />
                  <input type="text" placeholder="Image URL" value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} className="text-black rounded-lg mb-2" />
                  <input type="text" placeholder="Price" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} className="text-black rounded-lg mb-4" />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2  rounded-lg " onClick={handleUpdate}> Update </button>
                  <button className="bg-gray-300 hover:bg-gray-500 text-gray-800 px-4 py-2 rounded-lg" onClick={() => setEditableProduct(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Add new product card */}
        <div className="DUNK overflow-hidden  justify-center bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[410px] md:h-[310px] ">
          <div className='grid grid-flow-row gap-4'>
            <h1 className='text-2xl text-white text-center'>Add New Product Here</h1>
            <input type="text" placeholder="Title" value={updatedProduct.title} onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })} className="text-black rounded-lg" />
            <input type="text" placeholder="ID" value={updatedProduct.id} onChange={(e) => setUpdatedProduct({ ...updatedProduct, id: e.target.value })} className="text-black rounded-lg" />
            <input type="text" placeholder="Image URL" value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} className="text-black rounded-lg" />
            <input type="text" placeholder="Price" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} className="text-black rounded-lg" />
            <button className='p-4 border-2 border-white hover:border-red-700 rounded-lg' onClick={handleAddProduct}>Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
