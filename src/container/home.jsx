import React from 'react';
import Header from '../components/header';
import Table from '../components/table';
import '../styles/home.scss';

const Home = () => (
  <div className="app-container">
    <Header title="The King Of The Bahis" />
    <Table />
  </div>
);

export default Home;
