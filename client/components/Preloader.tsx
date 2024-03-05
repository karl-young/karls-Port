// import { useEffect, useState } from 'react'

// const Preloader = () => {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 3000)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div
//       className={`flex justify-center items-center h-screen ${
//         loading ? '' : 'hidden'
//       }`}
//     >
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Loading...</h1>
//         <div className="snowflake-container">
//           <div className="brackets">&lt;&nbsp;</div>
//           <div className="snowflake" />{' '}
//           {/* Assuming this displays the snowflake image */}
//           <div className="brackets">&nbsp;&gt;</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Preloader
