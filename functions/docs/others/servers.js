module.exports = [
  {
    url: "http://localhost:5001/auth-firebase-c1c6c/us-central1/api",
    description: "API de desenvolvimento",
    variables: {
      port: {
        enum: ["5001"],
        default: "5001",
      },
      basePath: {
        default: "auth-firebase-c1c6c/us-central1/api",
      },
    },
  },
  {
    url: "https://us-central1-auth-firebase-c1c6c.cloudfunctions.net/api",
    description: "API de produção",
  },
];
