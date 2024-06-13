import Home from "@/app/(root)/page";
describe('Page Imports', () => {
    it('should import all Pages without errors', () => {
        expect(Home).toBeDefined();
    });
})
