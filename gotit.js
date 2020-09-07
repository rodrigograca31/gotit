const got = require("got");

(async () => {
	try {
		const response = await got(
			"https://api.twitch.tv/kraken/channels/413856795",
			{
				headers: {
                    accept: "application/vnd.twitchtv.v5+json",
                    "client-id": "gp762nuuoqcoxypju8c569th9wz7q5"
				},
			}
        );
        
        console.log(response.body);
	} catch (error) {
		console.log(error.response.body);
	}
})();
