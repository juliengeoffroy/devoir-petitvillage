import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  name: string = "";
  lastName: string = "";
  email: string = "";
  showErrorMessage: boolean = false;
  messageSent: boolean = false;

  submitForm(event: Event) {
    event.preventDefault();
    if (
      !this.name.trim() ||
      !this.email.includes("@") ||
      !this.lastName.trim()
    ) {
      this.showErrorMessage = true;
      this.messageSent = false;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 1000);
    } else {
      this.showErrorMessage = false;
      this.messageSent = true;
      setTimeout(() => {
        this.messageSent = false;
      }, 1000);
    }
  }
}
