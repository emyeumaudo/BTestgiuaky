import UserContainer from "./UserContainer.js";

const $template = document.createElement("template");
$template.innerHTML = `
<user-container></user-container>`;

export default class UserList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$list = this.querySelector(".user-list");
  }
  static get obvervedAttributes() {
    return ["users"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attr == "user") {
      console.log(newValue);
      let data = JSON.parse(newValue);
      console.log(data);

      for (let userData of data) {
        let $userContainer = new UserContainer();
        $usercContainer.setAttribute("id", userData.id);
        $userContainer.setAttribute("name", userData.name);
        $userContainer.setAttribute("number-phone", userData.numberPhone);
        $userContainer.setAttribute("avatar", userData.avatar);
        $userContainer.setAttribute("gender", userData.gender);
        $userContainer.setAttribute("country", userData.country);
        $userContainer.setAttribute("favorites", userData.favorites);

        this.$list.appendChild($userContainer);
      }
    }
  }
}
window.customElements.define("user-list", UserList);
