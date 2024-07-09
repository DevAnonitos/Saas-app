import Discover from "@/app/(root)/discover/page";

describe('Page Imports', () => {
    it('should import Discover Page', () => {
        expect(Discover).toBeDefined();
        expect(Discover).toMatchSnapshot();
    });
});
