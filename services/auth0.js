import auth0 from 'auth0-js'

class Auth0 {
  constructor(){
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-qbqan784.au.auth0.com',
      clientID: 'BmSQI8c7LxQ3lovkzHgbHoTBEumY2Iz2',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication(){
    this.auth0.parseHash((err, authResult)=>{
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    })
  }

  setSession(){
    //save tokens!!!
  }

  login () {
    this.auth0.authorize();
  }

  logout () {
    this.auth0.logout();
  }
}

const auth0Client = new Auth0();

export default auth0Client