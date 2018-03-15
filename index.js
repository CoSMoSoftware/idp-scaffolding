const IdentityProvider = require("./lib/IdentityProvider");

//Load google idendity provider config
const config = require("./credentials.json");

//Create an idp instance
const idp = new IdentityProvider({});

//Register identity provider on global RTCIdentityProviderRegistrar 
global.rtcIdentityProvider.register(idp);