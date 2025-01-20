import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup-formcontrols',
  imports: [ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './formgroup-formcontrols.component.html',
  styleUrl: './formgroup-formcontrols.component.css'
})
export class FormgroupFormcontrolsComponent {
myForm:FormGroup;
formData:any;

constructor(private fb: FormBuilder) {
  this.myForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });
}
onSubmit() {
  this.formData = this.myForm.value;
  console.log(this.formData);
}

}
