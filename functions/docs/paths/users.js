module.exports = {
  get: {
    summary: "Recuperar todos os usuários",
    description: "Essa rota será responsável por recuperar todos os usuários",
    tags: ["User"],
    parameters: [
      {
        in: "query",
        name: "maxResults",
        schema: {
          type: "string",
        },
        required: false,
        description: "número máximo de usuários",
      },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                properties: {
                  $ref: "#/components/schemas/User",
                },
              },
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
