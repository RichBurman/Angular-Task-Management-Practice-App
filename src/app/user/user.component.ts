import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // @Input({required: true}) id!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  id = input.required<string>();
 // @Output() select = new EventEmitter();
  select = output<string>();
 

  imagePath = computed(() => 'assets/users/' + this.avatar());
  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  onSelectUser(){
    this.select.emit(this.id());
  }
}
