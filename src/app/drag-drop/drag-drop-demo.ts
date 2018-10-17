/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-demo',
  templateUrl: 'drag-drop-demo.html',
  styleUrls: ['drag-drop-demo.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DragAndDropDemoComponent {
  axisLock: 'x' | 'y';
  todo = [
    'Come up with catchy start-up name',
    'Add "blockchain" to name',
    'Sell out',
    'Profit',
    'Go to sleep'
  ];
  done = [
    'Get up',
    'Have breakfast',
    'Brush teeth',
    'Check reddit'
  ];
  constructor() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
