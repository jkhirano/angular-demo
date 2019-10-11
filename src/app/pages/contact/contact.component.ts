import { Component } from "@angular/core";

@Component({
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  formData = {
    name: "",
    email: ""
  };

  // so its currently bount to where its created
  submit = () => {
    console.log(this.formData);
  };
}
