import React from 'react';
import Header from '../components/header';
import Table from '../components/table';
import Cart from '../components/cart';
import '../styles/home.scss';

const Home = () => (
  <div className="app-container">
    <Header title="The King Of The Bahis" />
    <Table />
    <Cart />
  </div>
);

export default Home;
