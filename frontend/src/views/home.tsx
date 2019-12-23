import React from "react";
import AccountBalance from "../components/HomeBalance";
import Transfer from "../components/HomeTransfer";
import Transactions from "../components/HomeTransactions";

const Home: React.FC = () => {
  return ( 
      <div style={container}>
        <div style={item}><AccountBalance></AccountBalance></div>
        <div style={item}><Transactions></Transactions></div>
        <div style={item}><Transfer></Transfer></div>
      </div>
  );
};

const container={
  display: "grid", 
  gridTemplateColumns: "repeat(3, 1fr)", 
  gridTemplateRows: '70vh',
  gridGap: 20,
  marginTop: '90px',
  marginBottom: '90px'
}

const item={
  backgroundColor: '#373a47',
  color: '#fff',
  border: '1px solid #fff',
  margin: '20px',
  padding: '20px',
  fontSize: '15px',
  borderRadius: '10px'
}

export default Home;
