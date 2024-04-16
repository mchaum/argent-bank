import React from 'react';

const Account = ({title, amount, content}) => {
    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{content}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    );
};

export default Account;