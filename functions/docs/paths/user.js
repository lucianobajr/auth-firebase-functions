module.exports = {
  post: {
    summary: "Cadastrar usuário",
    description: "Essa rota será responsável por cadastrar um novo usuário",
    tags: ["User"],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User",
          },
          examples: {
            disciplina: {
              value: {
                username: "Luciano",
                email: "lbelo147-2@gmail.com",
                password: "12345678",
              },
            },
          },
        },
      },
    },
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
