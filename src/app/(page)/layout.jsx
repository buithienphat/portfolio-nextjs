import React from "react";
import Header from "../../components/Header";
import Footer from "@/components/Footer";

const HomeLayout = ({ children }) => {
    return (
        <div className="bg-[#121212]">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;
