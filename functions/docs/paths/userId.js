module.exports = {
  put: {
    summary: "Atualizar Usuário",
    description:
      "Essa rota será responsável por atualizar os dados de um usuário",
    tags: ["User"],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "id do usuário",
        required: true,
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User",
          },
          examples: {
            disciplina: {
              value: {
                photoURL:
                  "https://avatars.githubusercontent.com/u/45442173?v=4",
                phoneNumber: "+5531995678041",
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
  delete: {
    summary: "Excluir Usuário",
    description: "Essa rota será responsável por excluir um usuário",
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
              type: "object",
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
