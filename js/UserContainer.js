const $template = document.createElement("template");
$template.innerHTML = `
<div class="user-container">
        <div class="avatar"></div>
        <div class="name">John Doe</div>
        <div class="gender">Male</div>
        <div class="contact-info">
            <span class="country">ABC</span>
            <span class="phone-number">+0800000000000</span>
        </div>
        <hr></hr>
        <div class="favorites">
            <span class="number">abc</span>
            <span class="numbers">bca</span>
        </div>
    </div>`;

export default class UserContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode("true"));
  }
  static get observedAttributes() {
    return ["name", "gender", "country", "phoneNumber", "avatar", "favorites"];
  }

  attributeChngedCallback(attrName, newValue, oldValue) {
    if (attrName == "name") {
      this.$name.innerHTML = newValue;
    } else if (attrName == "gender") {
      this.$gender.innerHTML = newValue;
    } else if (attrName == "country") {
      this.$country.innerHTML = newValue;
    } else if (attrName == "phone-number") {
      this.$phoneNumber.innerHTML = newValue;
    } else if (attrName == "avatar") {
      this.$avatar.getElementsByClassName.backgroundImage = `url('${newValue}')`;
    } else if (attrName == "favorites") {
      this.$favorites.innerHTML == newValue;
    }
  }
}

window.customElements.define("user-container", UserContainer);
