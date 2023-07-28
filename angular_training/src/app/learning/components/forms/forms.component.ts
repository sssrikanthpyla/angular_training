import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  reactiveForm!: FormGroup;
  reactiveBuilderForm!: FormGroup;
  formData: any;
  constructor(private _router: Router, private fb: FormBuilder){}

  ngOnInit() {
    // Reactive Forms
    this.reactiveForm = new FormGroup({
      name: new FormControl('srikanth'),
      email: new FormControl('sssrikanth.pyla@gmail.com'),
      message: new FormControl('Feeling good'),
      other: new FormControl('Nothinf to say')
    });

    this.reactiveBuilderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      other: ['', [Validators.required]]
    });
  }

  // Reactive Forms
  onReactiveFormSubmit() {
    console.log('Inside onReactiveFormSubmit');
    console.log(this.reactiveBuilderForm);
    this.formData = this.reactiveBuilderForm.value;
  }

  // Template-driven Form
  submitForm(form: any) {
    this.formData = form.value;
  }
}
