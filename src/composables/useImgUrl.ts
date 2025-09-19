export function useImgUrl() {
    function getImgUrl(filename: string): string {
        return `https://d1wfumw2cntqgw.cloudfront.net/portfolio/${filename}`;
    }

    return { getImgUrl };
}