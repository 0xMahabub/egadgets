export const handler = async (_event, _context) => {
  const res = {
    message: "Hello from Serverless API!",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
