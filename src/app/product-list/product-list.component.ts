import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { TranslocoDirective } from '@ngneat/transloco';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  private translocoService = inject(TranslocoService);

  test$ = this.translocoService.selectTranslate('HELLO', { value: 'world' });
  link$ = this.translocoService.selectTranslate('common.link');
}
