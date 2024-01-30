// // import { time } from "console";
// // import { func } from "prop-types";
// import { useEffect, useState } from "react";

// // export default function UseEffect() {
// //   const [val, set] = useState("");

// //   useEffect(() => {
// //     console.log("Changed");
// //   }, [val, set]);

// //   const onChange = (event) => {
// //     set(event.target.value);
// //   };

// //   return <input value={val} onChange={onChange} />;
// // }

// export default function Home() {
//   return <Timer seconds={10} />;
// }
// const Timer = ({ seconds }) => {
//   const [timeLeft, setTimeLeft] = useState(seconds);
//   const [isPauset, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (timeLeft < 0) return;

//     const intervalId = setInterval(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeLeft, isPauset]);

//   console.log("timeleft", timeLeft);
//   console.log("ispaused", isPauset);

//   return (
//     <div className="border flex flex-col">
//       <button onClick={() => setIsPaused(true)}>Pause</button>
//       <button onClick={() => setIsPaused(false)}>Pause</button>
//       <button onClick={() => setTimeLeft(seconds)}>Reset</button>
//     </div>
//   );
// };
