exports.handler = async () => {
  console.log('supermario function ran...');

  //DUMMY DATA TO MOCK API CALL
  const data = { name: 'mario', age: '35', job: 'plumber'}

  //RETURN RESPONSE TO BROWSER
  return {
    statuscode: 200,
    body: JSON.stringify(data) //NOTE HAS TO BE JSON FORMAT
  }
}
