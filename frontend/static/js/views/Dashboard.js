import AbstractView from "./AbstractView.js";


;(async (component_name, html_def) => {
    const KalKel = function () {
        return Reflect.construct(HTMLElement, [], KalKel)
    }
    KalKel.prototype = Object.create(HTMLElement.prototype)
    KalKel.prototype.connectedCallback = function () {
        this.innerHTML = html_def
    }
    customElements.define(`${component_name}`, KalKel)
})(
    "kal-kel", `
     <h1>Hello from custom component.</h1>   
    `
)

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
           
            <Kal-kel></kal-kel>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}