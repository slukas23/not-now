const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy
const User = require("../models/User")

passport.use(
    new GoogleStrategy(
        {
            clientID: "373371502695-6l1c4c8fqaqgfebl81n16gleakcq6ht0.apps.googleusercontent.com",
            clientSecret: "LOp1WV-aJG2PnABQ-S5gK8Rp",
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
                .then(user => {
                    if (user) return done(null, user)
                    User.create({
                        googleId: profile.id,
                        displayName: profile.displayName
                    }).then(newUser => {
                        done(null, newUser)
                    })
                })
                .catch(err => {
                    done(err)
                })
        }
    )
)
