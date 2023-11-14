import React from 'react'

export const SelectedCategory = (select) => {
    return (
        <select>
            <option value="all">Todas las Categorías</option>
            <option value="menshoes">Zapatillas de hombre</option>
            <option value="menpants">Pantalones de hombre</option>
            <option value="menboots">Botas de hombre</option>
            <option value="mentees">Remeras de hombre</option>
            <option value="bagsandbackpacks">Bolsos y mochilas</option>
            <option value="gorras">Gorros y gorras</option>
            <option value="auriculares">Auriculares</option>
            <option value="botella">Botellas</option>
        </select>
    );
};

export default SelectedCategory;
