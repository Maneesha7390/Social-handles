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

## Set up
To use his first you need to install passport, passport-google-oauth20, passport-facebook, passport-twitter, passport-github2, passport-oauth2 packages. Next intialize express with following code

``` javascript
    app.use(passport.initialize());
    app.use(passport.session());
```

use the express-session

``` javascript
    app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    }));
```

## Google SSO Setup
For getting clientID, ClientSecret from googole-auth do follow this steps [Word](https://docs.google.com/document/d/11pSvp4d3AoU8vtu_K4deTDhRpuLT1A9-oDMIi1tnEfY/edit?usp=sharing).

For routing google API's use the below code
``` javascript
    router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))
    router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'your-failure-page-url' , successRedirect: 'your-success-page-url'}))
```


## Facebook SSO Setup
For getting clientID, ClientSecret from facebook-auth do follow this steps [Word](https://docs.google.com/document/d/16ha0NfVQhTgXqxBaWwuuf-u9OB__zlZBoHBJHByiWns/edit?usp=sharing).

For routing facebook API's use the below code
``` javascript
    router.get('/facebook', passport.authenticate('facebook'));
    router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```

## Twitter SSO Setup
For getting consumerKey, consumerSecret from twitter-auth do follow this steps [Word](https://docs.google.com/document/d/1OnSMKzncvYBOcaV-XVa2Ki_HI67Y5sSwEW8EBf9il_I/edit?usp=sharing).

For routing twitter API's use the below code
``` javascript
    router.get('/twitter', passport.authenticate('twitter'));
    router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```

## GitHub SSO Setup
For getting clientID, ClientSecret from github-auth do follow this steps [Word](https://docs.google.com/document/d/1OnSMKzncvYBOcaV-XVa2Ki_HI67Y5sSwEW8EBf9il_I/edit?usp=sharing).

For routing github API's use the below code
``` javascript
    router.get('/github', passport.authenticate('github'));
    router.get('/github/callback', passport.authenticate('github', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```

## LinkedIn SSO Setup
For getting clientID, ClientSecret from linkedin-auth do follow this steps [Word](https://docs.google.com/document/d/1CuMsLLnlxncqyXC3gQBG1LhMpi2v7vsFnnKtYM4M2Rw/edit?usp=sharing).

For routing linkedin API's use the below code
``` javascript
    router.get('/linkedin', passport.authenticate('linkedin'));
    router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: 'your-failure-page-url', successRedirect: 'your-success-page-url' }))
```