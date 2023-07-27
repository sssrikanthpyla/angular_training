import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  // reactiveForm!: FormGroup;
  formData: any;
  constructor(private _router: Router){}

  ngOnInit() {
    // Reactive Forms
    // this.reactiveForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });
  }

  // Reactive Forms
  // onReactiveFormSubmit(form: FormGroup) {
  //   if (form.valid) {
  //     alert(`Name: ${form.value.name}, Email: ${form.value.email} and message: ${form.value.message}`);
  //   } else {
  //     alert('Please enter required fields');
  //   }
  // }

  // Template-driven Form
  onTemplateFormSubmit(form: any) {
    if (form.valid) {
      alert(`Name: ${form.value.name}, Email: ${form.value.email} and message: ${form.value.message}`);
    } else {
      alert('Please enter required fields');
    }
  }


  /////////////////////////////////////////////////////////////

  submitForm(form: any) {
    if (form.valid) {
      this.formData = form.value;
      // alert(`Name: ${form.value.name}, Area: ${form.value.area} and message: ${form.value.message}`);

    } else {
      alert(`Enter the required fields`);
    }
  }
}
