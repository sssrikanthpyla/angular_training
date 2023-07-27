import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  reactiveForm!: FormGroup;
  
  constructor(private _router: Router){}

  ngOnInit() {
    // Reactive Forms
    this.reactiveForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  // Reactive Forms
  onReactiveFormSubmit(form: FormGroup) {
    if (form.valid) {
      alert(`Name: ${form.value.name}, Email: ${form.value.email} and message: ${form.value.message}`);
    } else {
      alert('Please enter required fields');
    }
  }

  // Template-driven Form
  onTemplateFormSubmit(form: any) {
    // alert(`Name: ${form.name}, email: ${form.email} and message: ${form.message}`);

    if (form.valid) {
      alert(`Name: ${form.value.name}, Email: ${form.value.email} and message: ${form.value.message}`);
    } else {
      alert('Please enter required fields');
    }
  }
}
