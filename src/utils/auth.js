export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(
    (user) => user.email === userData.email
  );

  if (userExists) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  users.push(userData);

  localStorage.setItem("users", JSON.stringify(users));

  return {
    success: true,
    message: "Registration successful",
  };
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );

  return {
    success: true,
    user,
  };
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};