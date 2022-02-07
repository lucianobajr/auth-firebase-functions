module.exports = {
  get: {
    summary: "Recuperar Usuário pelo Telefone",
    description: "Essa rota será responsável por recuperar um usuário pelo Telefone",
    tags: ["User"],
    parameters: [
      {
        name: "phoneNumber",
        in: "path",
        description: "Telefone do usuário",
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
