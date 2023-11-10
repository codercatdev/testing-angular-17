import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productId: string | null = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.router.snapshot.paramMap.get('id');
  }
}
