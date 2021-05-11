/*NOTE SERVERLESS FUNCTIONS HAVE TO BE IN A FUNCTION FOLDER IN THE ROOT DIRECTORY.
AND EACH FUNCTION HAS ITS OWN FILE*/ 

/*YOU WILL GET A FUNCTION ENDPOINT FROM NETLIFY, AND YOU CAN TEST THE RETURN IN A BROWSER */
/*WITHIN NETLIFY, YOU CAN SEE WHEN FUNCTIONS EXECUTE (THAT'S WHERTHE BELOW LOG WILL RUN*/

/*https://deploy-preview-7--gaming-vibes-dab.netlify.app/.netlify/functions/supermario*/

exports.handler = async () => {

  console.log('supermario function ran...');

  //DUMMY DATA TO MOCK AN API CALL
  const data = { name: 'mario', age: '35', job: 'plumber'}

  //RETURN RESPONSE TO BROWSER
  return {
    statusCode: 200,
    body: JSON.stringify(data) //NOTE HAS TO BE JSON FORMAT
  }
}
