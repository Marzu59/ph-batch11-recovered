import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import Rightaside from '../components/Rightaside';

const HomeLayout = () => {
    return (
        <div>

            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
               <aside className='col-span-3'>
                <LeftAside> </LeftAside>
               </aside>
                <section className='main col-span-6'>

                    <Outlet> </Outlet>
                </section>
                <aside className='col-span-3'> 
                    <Rightaside></Rightaside>
                </aside>
                
            </main>
            
        </div>
    );
};

export default HomeLayout;