function getSources() {
    return JSON.stringify([
        {
            name: "Empire Novel",
            baseUrl: "https://www.empirenovel.com/",
            lang: "en",
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
    async getChapters(args) {
        const myHeaders = new Headers();
        myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:145.0) Gecko/20100101 Firefox/145.0");
        myHeaders.append("Accept", "text/html, */*; q=0.01");
        myHeaders.append("Accept-Language", "en-US,en;q=0.5");
        myHeaders.append("Accept-Encoding", "gzip, deflate, br, zstd");
        myHeaders.append("X-CSRF-TOKEN", "6JbwhSh6y7OENj8PVZq16VCbEUvgVSvKDnd3ZTHF");
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        myHeaders.append("Sec-GPC", "1");
        myHeaders.append("Sec-Fetch-Dest", "empty");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        myHeaders.append("Sec-Fetch-Site", "same-origin");
        myHeaders.append("Connection", "keep-alive");
        
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const response = await fetch("https://www.empirenovel.com/select-partial/martial-god-asura/6433", requestOptions);
        
        if (!response.ok) {
            return "shit";
        }

        else {
            return "yes";
        }
    }
    getNovel() {}
    getChapterContent() {}
}