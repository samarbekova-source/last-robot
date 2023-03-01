import React from "react";
import Card from "./Card";

// ? Can also do like this
const CardList = ({ robots }) => {
  const cardArrays = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardArrays}</div>;
};

// ? second one can also try
// const CardList = ({ robots }) => {
//   if (true) {
//     throw new Error("NOOOOOO!");
//   }

//   return (
//     <div>
//       {robots.map((user, i) => {
//         return (
//           <Card
//             key={i}
//             id={robots[i].id}
//             name={robots[i].name}
//             email={robots[i].email}
//           />
//         );
//       })}
//     </div>
//   );
// };

export default CardList;
