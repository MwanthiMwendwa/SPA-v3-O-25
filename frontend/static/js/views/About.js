import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>About</h1>
            <p>Get to Know the organization leaders here.</p>
        `;
    }
}