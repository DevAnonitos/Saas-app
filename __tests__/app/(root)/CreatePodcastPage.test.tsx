import CreatePodcast from "@/app/(root)/create-podcast/page";
describe('Page Imports', () => {
    it('should import CreatePodcast', () => {
        expect(CreatePodcast).toBeDefined();
        expect(CreatePodcast).toMatchSnapshot();
    });
})
