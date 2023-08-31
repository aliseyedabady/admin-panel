import React from "react";
import FlatList from "../../components/flatlist";
import { resultCards } from "../../constants/resultCards";
import ResultCard from "../../components/card/result";

const Dashboard = () => {
  return (
    <>
      <FlatList
        classNames="grid gap-6 grid-cols-6 mt-6"
        arr={resultCards}
        render={(item, key) => {
          return <ResultCard {...item} />;
        }}
      />
    </>
  );
};

export default Dashboard;
