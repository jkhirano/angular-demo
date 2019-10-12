import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements AfterViewInit {
  @ViewChild("nameInput", null)
  nameInput: ElementRef;

  formData = {
    name: "",
    email: ""
  };

  nameValid = false;
  emailValid = false;

  errors = {
    name: "",
    email: ""
  };

  constructor(private backend: BackendService) {}

  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
  }

  validateName = () => {
    if (!this.formData.name) {
      this.nameValid = false;
      this.errors.name = "Name is required";
    } else if (this.formData.name.length < 3) {
      this.nameValid = false;
      this.errors.name = "Name should be at least 3 characters";
    } else {
      this.nameValid = true;
      this.errors.name = "";
    }
  };

  validateEmail = () => {
    if (!this.formData.email) {
      this.emailValid = false;
      this.errors.email = "Email is required";
    } else if (this.formData.email.length < 3) {
      this.emailValid = false;
      this.errors.email = "Email should be at least 3 characters";
    } else if (!this.formData.email.includes("@")) {
      this.emailValid = false;
      this.errors.email = "Badly formatted email";
    } else {
      this.emailValid = true;
      this.errors.email = "";
    }
  };

  // so its currently bound to where its created
  submit = () => {
    // console.log(this.formData);
    // this.backend.contact(this.formData);
    // };
    // this is a promise (connected to backend.service.ts)
    this.backend.contact(this.formData).then(response => {
      console.log(response); // {success: 200}
    });
  };
}
