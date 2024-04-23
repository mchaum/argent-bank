import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Account from '../components/Account';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import UserEdit from '../components/UserEdit';

const User = () => {

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // Redirection vers la page de connexion si l'utilisateur n'a pas de token //
    if (!token) {
      navigate("/sign-in");
    }
  }, [token, navigate]);

  return (
    <>
    {/* Conditionnement du rendu de la page en fonction de l'état du token : permet d'éviter que la page s'affiche brièvement avant la redirection */}
      {token && (
        <>
          <Header />
          <main className="main bg-dark-user">
          <UserEdit />
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
      )}
    </>
  );
};

export default User;