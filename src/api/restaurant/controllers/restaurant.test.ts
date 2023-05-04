import { describe, beforeAll, afterAll, it, expect } from "@jest/globals";
import request from "supertest";
import { setupStrapi, stopStrapi } from "../../../../tests/helpers/strapi";


beforeAll(async () => {
  await setupStrapi(); // singleton so it can be called many times
});

afterAll(async () => {
  await stopStrapi();
});

it("should return hello world", async () => {
    await request(strapi.server.httpServer)
      .get("/api/restaurants")
      .expect(200) // Expect response http code 200
      .then((data) => {
        expect(data).toBe("Hello World!"); // expect the response text
      });
  });