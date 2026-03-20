// Post request
const option = {};
async function signUp() {
  const response = await fetch(
    "https://simple-crud-backend-6o49.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      header: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        name: "Student Three",
        email: "student@example.com",
        password: "mySecurePassword",
      }),
    },
  );
}

const data = await response.json();
console.log(data);
