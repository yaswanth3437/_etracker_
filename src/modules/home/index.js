import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HomeComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    const calculateBalance = () => {
      let exp = 0;
      let inc = 0;
      transactions.forEach((t) => {
        t.type === "EXPENSE" ? (exp += t.amount) : (inc += t.amount);
      });
      setExpense(exp);
      setIncome(inc);
    };
    calculateBalance();
  }, [transactions]);

  const addTransaction = (payload) => {
    setTransactions([...transactions, payload]);
  };

  return (
    <HomeContainer>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions.length > 0 && (
        <TransactionsComponent transactions={transactions} />
      )}
    </HomeContainer>
  );
};

export default HomeComponent;