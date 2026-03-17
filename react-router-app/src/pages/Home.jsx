import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Header />
      <h1 class="text-5xl font-bold underline text-green-700 text-center">
        Hello world!
      </h1>

      <h2 class="">This is Home page </h2>
      <Footer />
    </div>
  );
}

export default Home;
