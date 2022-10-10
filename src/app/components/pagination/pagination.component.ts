import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() itemsBeforeAfter: number;

  pages: Array<number> = [];

  constructor() { }

  ngOnInit() {
    this.pages = this.getData();
  }

  getData(): Array<number> {
    const pages: Array<number> = [];

    if(this.totalPages > 0) {
      pages.push(1);

      const startPage: number = (this.currentPage - this.itemsBeforeAfter) > 1 ? this.currentPage - this.itemsBeforeAfter : 2;
      for (var i = startPage; (i <= ((startPage + this.itemsBeforeAfter) + this.itemsBeforeAfter) && i < this.totalPages); i++) {
        pages.push(i);
      }

      pages.push(this.totalPages);
    }

    return pages;
  }

}
