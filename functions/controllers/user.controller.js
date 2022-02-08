const { auth } = require("../admin");

exports.getUsers = async (request, response) => {
  const { maxResults } = request.query;
  try {
    const users = await auth.listUsers(maxResults && Number(maxResults));

    return response.json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

exports.getUserById = async (request, response) => {
  const { id } = request.params;
  try {
    const users = await auth.getUser(id);

    return response.json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

exports.getUserByPhone = async (request, response) => {
  const { phoneNumber } = request.params;
  try {
    const users = await auth.getUserByPhoneNumber(phoneNumber);

    return response.json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

exports.getUserByEmail = async (request, response) => {
  const { email } = request.params;
  try {
    const users = await auth.getUserByEmail(email);

    return response.json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

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

exports.updateUser = async (request, response) => {
  const { id } = request.params;
  const { email, username, photoURL, phoneNumber } = request.body;
  try {
    const user = await auth.updateUser(id, {
      displayName: username,
      photoURL,
      phoneNumber,
      email,
    });

    return response.json(user);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

exports.deleteUser = async (request, response) => {
  const { id } = request.params;
  try {
    await auth.deleteUser(id);

    return response.json({ ok: "user excluded!" });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
