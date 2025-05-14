import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('categories.json').then(res=> res.json())
// console.log(categoryPromise)

const Categories = () => {
    const categories =use(categoryPromise)
    // console.log(categories)

    return (
        <div>
            <h1>All Categories ({categories.length}) </h1>
            <div className='mt-4 grid grid-cols-1'>
                {
                    categories.map(category=> <NavLink key={category.id} to={`/category/${category.id}`} className={'btn bg-base-100 hover:bg-base-200 border-0 gap-3' }> {category.name} </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;