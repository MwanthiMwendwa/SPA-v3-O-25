import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Art Work");
    }

    async getHtml() {
        return `
          
        `;
    }
}
