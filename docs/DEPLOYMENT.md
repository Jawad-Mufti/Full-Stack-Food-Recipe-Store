# Deployment

These steps describe how you can deploy your app online for free (NO credit card required).

* Good reading: [Express Tutorial Part 7: Deploying to production](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)

## Setup Hosted MongoDB

1. Sign up for a free [mLab account](https://mlab.com/signup/)
2. Click *Create New* in the *MongoDB Deployments* section
3. Select the *SANDBOX FREE* plan type and click continue
4. Select the *Europe (Ireland) (eu-west-1)* region and click continue
5. Choose a database name and click continue
6. Click *Submit Order*
7. Select the *Users* tab and click *Add database user*
8. Choose a username and password and click *Create*
9. Remember the MongoDB URI shown above including the dbuser and dbpassword you choose! Example:    `mongodb://my_db_user:my_super_secure_pw1@ds123456.mlab.com:12345/my-db-name`

Find a more detailed tutorial [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Setting_up_the_MongoDB_database).

## Deploy to Heroku

Sign up for a free [Heroku account](https://signup.heroku.com/?c=70130000001x9jFAAQ).

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and follow these steps:

```bash
heroku create --region eu
heroku config:set MONGODB_URI='mongodb://your_user:your_password@ds139278.mlab.com:39278/local_library_production'
heroku config:set NODE_ENV='production'
git push heroku master
heroku open
```

### Debugging Heroku

```bash
heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku ps   #Display dyno status
```
