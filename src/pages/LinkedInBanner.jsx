// import { greenTheme } from '../styles/colors';

// // Seeded random for stable wallpaper
// const seededRandom = (seed) => {
//   var x = Math.sin(seed) * 10000;
//   return x - Math.floor(x);
// };

// function Wallpaper({ width, height, theme = greenTheme }) {
//   const squareSize = 8;
//   const cols = Math.ceil(width / squareSize);
//   const rows = Math.ceil(height / squareSize);
//   const total = rows * cols;

//   const greenShades = ['rgb(0,15,0)', 'rgb(0,30,0)', 'rgb(0,45,0)'];
//   const purpleShades = ['rgb(15,0,15)', 'rgb(30,0,30)', 'rgb(45,0,45)'];

//   return (
//     <div
//       style={{
//         width,
//         height,
//         display: "grid",
//         gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
//         gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
//         position: "absolute",
//         top: 0,
//         left: 0,
//         zIndex: 0
//       }}
//     >
//       {Array.from({ length: total }).map((_, i) => {
//         const hasColor = seededRandom(i) < 0.125; // stable randomness

//         let color = 'black';
//         if (hasColor) {
//           color =
//             theme === greenTheme
//               ? greenShades[Math.floor(seededRandom(i+1) * greenShades.length)]
//               : purpleShades[Math.floor(seededRandom(i+1) * purpleShades.length)];
//         }

//         return (
//           <div
//             key={i}
//             style={{
//               width: squareSize,
//               height: squareSize,
//               backgroundColor: color,
//               borderRadius: 2
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }


// function LinkedInBanner({ children }) {
//   return (
//     <div
//       id="banner"
//       style={{
//         width: 1584,
//         height: 396,
//         position: "relative",
//         overflow: "hidden",
//         fontFamily: "Inter, sans-serif",
//         backgroundColor: "black"
//       }}
//     >
//       <Wallpaper width={1584} height={396} />

//       {/* Foreground content container */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "flex-end",
//           padding: 16,
//           gap: 0
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }


// export default LinkedInBanner
