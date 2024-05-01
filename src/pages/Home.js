import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';
import PriorityImg from '../assets/icon-chat.webp';
import MoneyImg from '../assets/icon-money.webp';
import SecurityImg from '../assets/icon-security.webp';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Features
                    img={PriorityImg}
                    title={"You are our #1 priority"}
                    text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."} />

                <Features
                    img={MoneyImg}
                    title={"More savings means higher rates"}
                    text={"The more you save with us, the higher your interest rate will be!"} />

                <Features
                    img={SecurityImg}
                    title={"Security you can trust"}
                    text={"We use top of the line encryption to make sure your data and money is always safe."} />
            </section>
            <Footer />
        </div>
    );
};

export default Home;