import { TestBed } from '@angular/core/testing';

import { CadastroProdutosService } from './cadastro-produtos.service';

describe('CadastroProdutosService', () => {
  let service: CadastroProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
