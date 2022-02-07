module.exports = {
  get: {
    summary: "Recuperar Usuário pelo ID",
    description: "Essa rota será responsável por recuperar um usuário pelo ID",
    tags: ["User"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "id do usuário",
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
