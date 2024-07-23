const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const OAuth2Strategy = require('passport-oauth2').Strategy;
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

let APP_URL = process.env.APP_URL && process.env.APP_URL.trim() !== '' 
    ? process.env.APP_URL 
    : process.env.LOCALHOST_URL.replace('{port}', process.env.PORT);

// Google OAuth Strategy
module.exports = function configGoogleAuth(passport) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URL.replace('{app_url}', APP_URL),
        },
        async (accessToken, refreshToken, profile, done) => {
          process.nextTick(() => {
            return done(null, profile);
          });
        }
      )
    )
}

module.exports = function configFacebookAuth(passport) {
    passport.use(new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: process.env.FACEBOOK_OAUTH_REDIRECT_URL.replace('{app_url}', APP_URL),
        },
        async (accessToken, refreshToken, profile, done) => {
          process.nextTick(() => {
            return done(null, profile);
          });
        }
      )
    )
}

module.exports = function configTwitterAuth(passport) {
  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CLIENT_ID,
    consumerSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: process.env.TWITTER_OAUTH_REDIRECT_URL.replace('{app_url}', APP_URL)
  }, (token, tokenSecret, profile, done) => {
    process.nextTick(() => {
      return done(null, profile);
    });
  }));
}

module.exports = function configGithubAuth(passport) {
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_OAUTH_REDIRECT_URL.replace('{app_url}', APP_URL)
      },
        async (accessToken, refreshToken, profile, done) => {
          process.nextTick(() => {
            return done(null, profile);
          });
        }
      )
    )
}

module.exports = function configLinkedInAuth(passport) {
  passport.use('linkedin', new OAuth2Strategy({
    authorizationURL: process.env.LINKEDIN_AUTHENTICATION_URL,
    tokenURL: process.env.LINKEDIN_OAUTH_ACCESSTOKEN_URL,
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.LINKEDIN_OAUTH_REDIRECT_URL.replace('{app_url}', APP_URL),
    scope: ['email', 'openid', 'profile', 'w_member_social'],
    state: true
  }, async(accessToken, refreshToken, profile, done) => {
  try {
    const profileResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Connection': 'Keep-Alive'
      }
    });
    const userProfile = {
      firstName: profileResponse.data.given_name,
      lastName: profileResponse.data.family_name,
      email: profileResponse.data.email,
      linkedinId: profileResponse.data.sub,
      picture: profileResponse.data.picture || ''
    };
    return done(null, userProfile);
  } catch (error) {
    return done(error);
  }
  }));
}

passport.serializeUser((user, done) => {
    done(null, user);
    });
    
passport.deserializeUser((obj, done) => {
    done(null, obj);
    });