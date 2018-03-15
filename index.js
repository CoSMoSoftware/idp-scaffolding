const IdentityProvider = require("./lib/IdentityProvider");

//Load google idendity provider config
const config = require("./config.json");

//Create an idp instance
const idp = new IdentityProvider(config);

//Register identity provider on global RTCIdentityProviderRegistrar 
rtcIdentityProvider.register(idp);
