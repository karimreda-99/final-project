import "node-fetch";
import fetchMock from "fetch-mock";
import { expect } from "chai";

describe("The api test", () => {
  it("Dispatches the correct actions in the success scenario", async () => {
    const fakeReq = [{}];
    fetchMock.post("https://goldblv.com/api/hiring/tasks/register", fakeReq);
    const expectedRes = {};
    expect(fakeReq).to.deep.equal(expectedRes);
    fetchMock.reset();
  });
});
