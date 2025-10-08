import { Hono } from "hono";
import { channelFeedHandler } from "./routes/channel";
import { userFeedHandler } from "./routes/user";

type Bindings = {
	DEFAULT_HUB: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
	return c.text("Farcaster Hub Feeds API");
});

// Channel feed routes
app.get("/:feedType/channel", channelFeedHandler);

// User feed routes
app.get("/:feedType/user/:fid", userFeedHandler);

export default app;
