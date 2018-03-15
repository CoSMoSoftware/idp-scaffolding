const IdentityProvider = require("./lib/IdentityProvider");

//Load google idendity provider config
const config = require("./config.json");

//Create an idp instance
const idp = new IdentityProvider(config);

//Export module registration function
module.exports = function() {
	//Register identity provider on global RTCIdentityProviderRegistrar 
	global.rtcIdentityProvider.register(idp);
};