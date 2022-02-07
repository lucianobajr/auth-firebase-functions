const { auth } = require("../admin");

exports.setUser = async (request, response) => {
  const { username, email, password } = request.body;
  try {
    const user = await auth.createUser({
      email,
      password,
      displayName: username,
    });

    return response.json(user);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
