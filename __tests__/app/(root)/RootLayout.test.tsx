import RootLayout from "@/app/(root)/layout";

describe('Page Imports', () => {
    it('should import RootLayout', () => {
        expect(RootLayout).toBeDefined();
        expect(RootLayout).toMatchSnapshot();
    });
});
