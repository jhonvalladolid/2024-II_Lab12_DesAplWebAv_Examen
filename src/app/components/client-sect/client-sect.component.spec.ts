import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSectComponent } from './client-sect.component';

describe('ClientSectComponent', () => {
  let component: ClientSectComponent;
  let fixture: ComponentFixture<ClientSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
