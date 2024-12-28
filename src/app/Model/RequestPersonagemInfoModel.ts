export class RequestPersonagemInfoModel {
    count: number;
    next: string;
    pages: number;
    prev: string;
    constructor(count: number,
        next: string,
        pages: number,
        prev: string) {
        this.count = count;
        this.next = next;
        this.pages = pages;
        this.prev = prev;
    }
}