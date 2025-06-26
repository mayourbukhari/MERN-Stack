import React, { useState, useEffect } from 'react';

const Filter = ({ onFilter }) => {
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        // Fetch categories from fakestoreapi
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setSelected(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <label htmlFor="category-filter">Filter by Category: </label>
            <select id="category-filter" value={selected} onChange={handleChange}>
                <option value="">All</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;