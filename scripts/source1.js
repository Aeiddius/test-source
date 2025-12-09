function getSources() {
    return JSON.stringify([
        {
            name: "source1",
            baseUrl: "https://example.com",
            lang: "en",
            version: 1
        },
        {
            name: "source1 tl",
            baseUrl: "https://fr.example.com",
            lang: "fr",
            version: 1
        },
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