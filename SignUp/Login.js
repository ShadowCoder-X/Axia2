// Post request
const option = {
  method: "POST",
  header: { "Content-Type": "Application/json" },
  body: JSON.stringify({
    name: "Student Three",
    email: "student@example.com",
    password: "mySecurePassword",
  }),
};

async function login() {
  const response = await fetch(
    "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
    option,
  );
}

const data = await response.json();
console.log(data);

// btn.addEventListener("click", function name() {
//   const emEl = document.getElementById("email").value;
//   const emEl = document.getElementById("password").value;
//   const emEl = document.getElementById("name").value;
// });
