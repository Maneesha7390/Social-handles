# Social-handles


## Environment Variables

Make sure to set the following environment variables in your project:

```env
PORT=3000
APP_URL=''
LOCALHOST_URL='http://localhost:{port}'

# Redirections
SUCCESS_REDIRECT='{app_url}/success'
FAILURE_REDIRECT='{app_url}/failure'

# Google Login
GOOGLE_CLIENT_ID='your-google-client-id'
GOOGLE_CLIENT_SECRET='your-google-client-secret'
GOOGLE_OAUTH_REDIRECT_URL='{app_url}/api/users/google/callback'

# Facebook Login
FACEBOOK_CLIENT_ID='your-facebook-client-id'
FACEBOOK_CLIENT_SECRET='your-facebook-client-secret'
FACEBOOK_OAUTH_REDIRECT_URL='{app_url}/api/users/facebook/callback'

# Twitter Login
TWITTER_CLIENT_ID='your-twitter-client-id'
TWITTER_CLIENT_SECRET='your-twitter-client-secret'
TWITTER_BEARER_TOKEN='your-twitter-bearer-token'
TWITTER_ACCESS_TOKEN='your-twitter-access-token'
TWITTER_ACCESS_TOKEN_SECRET='your-twitter-access-token-secret'
TWITTER_OAUTH_REDIRECT_URL='{app_url}/api/users/twitter/callback'

# GitHub Login
GITHUB_CLIENT_ID='your-github-client-id'
GITHUB_CLIENT_SECRET='your-github-client-secret'
GITHUB_OAUTH_REDIRECT_URL='{app_url}/api/users/github/callback'

# LinkedIn Login
LINKEDIN_CLIENT_ID='your-linkedin-client-id'
LINKEDIN_CLIENT_SECRET='your-linkedin-client-secret'
LINKEDIN_OAUTH_REDIRECT_URL='{app_url}/api/users/linkedin/callback'
LINKEDIN_AUTHENTICATION_URL='https://www.linkedin.com/oauth/v2/authorization'
LINKEDIN_OAUTH_ACCESSTOKEN_URL='https://www.linkedin.com/oauth/v2/accessToken'

```

## Tested Dependencies and Versions

This package has been tested with the following dependencies and their respective versions:

- `axios`: ^1.7.2
- `dotenv`: ^16.4.5
- `passport`: ^0.7.0
- `passport-facebook`: ^3.0.0 (for Facebook SSO)
- `passport-github2`: ^0.1.12 (for GitHub SSO)
- `passport-google-oauth`: ^2.0.0 (for Google SSO)
- `passport-oauth2`: ^1.8.0 (for LinkedIn SSO)
- `passport-twitter`: ^1.0.4 (for Twitter SSO)

and Node Version is 20.15.0
To initialize Passport.js and manage sessions in your application, include the following middleware setup in your main server file:

``` javascript
    app.use(passport.initialize());
    app.use(passport.session());
```

## Google SSO Setup
For getting clientID, ClientSecret from googole-auth do follow this steps [Word](https://docs.google.com/document/d/11pSvp4d3AoU8vtu_K4deTDhRpuLT1A9-oDMIi1tnEfY/edit?usp=sharing).

For routing google API's use the below code
``` javascript
    router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))
    router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'your-failure-page-url' , successRedirect: 'your-success-page-url'}))
```

### Google SSO Testing
For a detailed implementation of Google SSO using Passport.js and how it integrates with this project, watch this [Loom video](https://www.loom.com/share/a1009acba4fb41088cb1b6953101086e?sid=afa9368d-aeab-4f55-8be3-38b18d475153).


## Facebook SSO Setup
For getting clientID, ClientSecret from facebook-auth do follow this steps [Word](https://docs.google.com/document/d/16ha0NfVQhTgXqxBaWwuuf-u9OB__zlZBoHBJHByiWns/edit?usp=sharing).

For routing facebook API's use the below code
``` javascript
    router.get('/facebook', passport.authenticate('facebook'));
    router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```

### Facebook SSO Testing
For a detailed implementation of facebook SSO using Passport.js and how it integrates with this project and we need some extra meta verification then we will redirect that to success page but even though we are getting profle info, watch this [Loom video](https://www.loom.com/share/f911accffe1e44de8a1ea883b059b98f?sid=7456cc84-8204-43d5-a288-8749c685272d).

## Twitter SSO Setup
For getting consumerKey, consumerSecret from twitter-auth do follow this steps [Word](https://docs.google.com/document/d/1OnSMKzncvYBOcaV-XVa2Ki_HI67Y5sSwEW8EBf9il_I/edit?usp=sharing).

For routing twitter API's use the below code
``` javascript
    router.get('/twitter', passport.authenticate('twitter'));
    router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```
### Twitter SSO Testing
For a detailed implementation of Twitter SSO using Passport.js and how it integrates with this project, watch this [Loom video](https://www.loom.com/share/963b4fde9e8e44b49a40f6cfcbb8555e?sid=20fc5544-1ee4-4c56-b728-6ad2acd92984).

## GitHub SSO Setup
For getting clientID, ClientSecret from github-auth do follow this steps [Word](https://docs.google.com/document/d/1OnSMKzncvYBOcaV-XVa2Ki_HI67Y5sSwEW8EBf9il_I/edit?usp=sharing).

For routing github API's use the below code
``` javascript
    router.get('/github', passport.authenticate('github'));
    router.get('/github/callback', passport.authenticate('github', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```
### GitHub SSO Testing
For a detailed implementation of github SSO using Passport.js and how it integrates with this project, watch this [Loom video](https://www.loom.com/share/8868b65e417d4d56bb6624e745ca257e?sid=14c50fb4-df26-43be-9acd-48276e3eff7b).

## LinkedIn SSO Setup
For getting clientID, ClientSecret from linkedin-auth do follow this steps [Word](https://docs.google.com/document/d/1CuMsLLnlxncqyXC3gQBG1LhMpi2v7vsFnnKtYM4M2Rw/edit?usp=sharing).

For routing linkedin API's use the below code
``` javascript
    router.get('/linkedin', passport.authenticate('linkedin'));
    router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```

### Linkedin SSO Testing
For a detailed implementation of linkedin SSO using Passport.js and how it integrates with this project, watch this [Loom video](https://www.loom.com/share/5282215d0de8485fbb9b6539814ff21a?sid=178f7569-1429-4dc9-97b4-e6f80666b4a0).