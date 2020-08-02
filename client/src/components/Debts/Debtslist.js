import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Debts } from "./Debts";
import { AnimatedList } from "react-animated-list";

export const Debtslist = () => {
  const { debts } = useContext(GlobalContext);
  
  return (
    <div>
      <h3>רשימת חייבים:</h3>
      <ul className="list">
        <AnimatedList animation={"grow"}>
          {debts.map((debt) => (
            <Debts key={debt.id} debt={debt} />
          ))}
        </AnimatedList>
      </ul>
    </div>
  );
};
