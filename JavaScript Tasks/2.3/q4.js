// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and 
// returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret

export function createSecretHolder(secret) {

    let _secret = secret;
    
    return {
      getSecret(){
        return _secret;
      },
      setSecret(secret){
        _secret = secret;
      }
    }
  }