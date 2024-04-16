import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Account from '../components/Account';

const User = () => {
    return (
        <>
        <Header />
        <main className="main bg-dark-user">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title={"Argent Bank Checking (x8349)"}
        amount={"$2,082.79"}
        content={"Available Balance"}
        />
        <Account
        title={"Argent Bank Savings (x6712)"}
        amount={"$10,928.42"}
        content={"Available Balance"}
        />
      <Account
        title={"Argent Bank Credit Card (x8349)"}
        amount={"$184.30"}
        content={"Current Balance"}
        />
    </main>
    <Footer />
    </>
    );
};

export default User;