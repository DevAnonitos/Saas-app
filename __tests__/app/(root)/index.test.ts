import Home from "@/app/(root)/page";
import CreatePodcast from "@/app/(root)/create-podcast/page";
import Discover from "@/app/(root)/discover/page";

describe("All Page Import", () => {
  it("should import All Pages", () => {
    expect(Home).toBeDefined();
    expect(CreatePodcast).toBeDefined();
    expect(Discover).toBeDefined();
  })

  it("should import All Pages", () => {
    expect(Home).toMatchSnapshot
    expect(CreatePodcast).toMatchSnapshot();
    expect(Discover).toMatchSnapshot();
  })
});