module.exports = {
  get: {
    summary: "Recuperar Usuário pelo Email",
    description: "Essa rota será responsável por recuperar um usuário pelo Email",
    tags: ["User"],
    parameters: [
      {
        name: "email",
        in: "path",
        description: "Email do usuário",
        required: true,
      },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: {
              type: "object",
            },
          },
        },
      },
    },
  },
};
