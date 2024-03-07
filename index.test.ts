import { Wikimedia } from "./index";

describe("wikimedia-typescript-sdk", () => {
    it("initialize client", async () => {
        const wikimedia = new Wikimedia({
            apiKey: "API_KEY",
        });
    });
});
