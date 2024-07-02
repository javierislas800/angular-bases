import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [
    {
      id: uuid(),
      name: "Trunks",
      power: 10
    }
  ];

  onDeleteCharacter(id:string):void {
    console.log({id});
    this.onDelete.emit(id);
  }

}
