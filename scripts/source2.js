function getSources() {
    return JSON.stringify([
        {
            name: "source2",
            baseUrl: "https://example.com",
            lang: "en",
            version: 1
        }
    ])
}


class Source {
    constructor(args) {
        this.lang = args.lang || "en";
        this.baseUrl = args.baseUrl
    }

    getBrowse(args) {}
    getChapters(args) {}
    getNovel() {}
    getChapterContent() {}
}