# NetNinjaNextIdentity

Next JS App with Netlify Identity (auth)

Developed on dev branch, deployed from master branch

# Notes

## Serverless Functions
- Serverless functions are pointed at from the `.toml` file
- They have to be exported 
- Each function is an individual named file, which you can then call as an endpoint
- You get access to three parameters - event, context and callback

## .toml
- This is the config file for Netlify
- Sits in the root directory
- Points to your functions folder
- Can also add aliases to prettify endpoints

## Auth
- You can chose invite only register inside Netlify -> Identity -> Settings
- You can allow signup with 3rd Party details (GitHub, Google etc) inside Netlify -> Identity -> Settings