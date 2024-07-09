import Home from "@/app/(root)/page";
describe('Page Imports', () => {
    it('should import HomePage', () => {
        expect(Home).toBeDefined();
        expect(Home).toMatchSnapshot();
    });
});
