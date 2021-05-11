//EVENT, CONTEXT AND ??? ARE AUTOMATICALLY PASSED TO ALL SERVERLESS FUNCTIONS
exports.handler = async (event, context) => {
  const guides = [
    {title: "Title 1", author: "Author 1"},
    {title: "Title 2", author: "Author 2"},
    {title: "Title 3", author: "Author 3"}
  ]

  //CHECK FOR USER TOKEN - IE USER IS LOGGED IN
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides)
    }
  }

  return {
    statusCode: 401,
    body: JSON.stringify({message: "Not logged in yo..."})
  }

}