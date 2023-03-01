import React from "react";

// receiving props
// const Card = (props) => {
//   return (
//     <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 ">
//       {/* using styles from tachyons */}
//       <img src={`https://robohash.org/${props.id}?200x200 alt="robots"`} />
//       <div>
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//       </div>
//     </div>
//   );
// };

// ? с деструктуризацией
// const Card = (props) => {
//   const { name, email, id } = props;
//   return (
//     <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 ">
//       {/* using styles from tachyons */}
//       <img src={`https://robohash.org/${id}?200x200 alt="robots"`} />
//       <div>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     </div>
//   );
// };

// ? also can do this
const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 ">
      {/* using styles from tachyons */}
      <img src={`https://robohash.org/${id}?200x200 alt="robots"`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
