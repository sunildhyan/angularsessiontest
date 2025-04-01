import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any = null;
  // Create the form group and form control
  nameForm: FormGroup;
  constructor(private service: ServiceService) {
    // Initialize the reactive form with a single "name" form control
    this.nameForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }
  // This method will handle form submission
  onSubmit() {
    if (this.nameForm.valid) {
      console.log('Form Submitted', this.nameForm.value);
      this.service.postData(this.nameForm.value).subscribe(
        (response) => {
          console.log('Data posted successfully', response);
        },
        (error) => {
          console.error('Error posting data', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
  // Method to call getData from the service on button click
  onGetDataClick(): void {
    this.service.getData().subscribe(
      (response) => {
        this.data = response; // Store the fetched data
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
