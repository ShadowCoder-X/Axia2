// // Post request
// const option = {};
// async function signUp() {
//   const response = await fetch(
//     "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
//     {
//       method: "POST",
//       header: { "Content-Type": "Application/json" },
//       body: JSON.stringify({
//         name: "Student Three",
//         email: "student@example.com",
//         password: "mySecurePassword",
//       }),
//     },
//   );
// }

// const data = await response.json();
// console.log(data);

// const forData = now ForData
// btn.addEventListener("click", function name() {
//   const emEl = document.getElementById("email").value;
//   const emEl = document.getElementById("password").value;
//   const emEl = document.getElementById("name").value;
// });

function App() {
  const [name, setName] = useState("");

  // new FormData({
  //   fName: "",
  //   email: ""
  // })

  function(handleSomel) {
    console.log("somel")
  }
  return (
  <div>
     <input 
         type="text"
         name="fName"
         value={name}
         onChange={(e) => setName(e.target.value)} />

         <button onClick={handleSomel}> </button>
  
  </div>
)}
