import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  imports: [CommonModule, FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
oneWayBinding:string = 'Angular One way Binding, Text set from the component';
twoWayBinding: string='';

}
