import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClientService } from 'src/app/service/http-client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dataJson: any;
  route: string = 'Factura/ByCodigoDetalle';
  form: FormGroup;
  ticket: FormArray;
  errorMessage: string = null;

  constructor(
    private _httpClient: HttpClientService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private _router: Router
  ) {}

  get tickets() {
    return this.form.get('tickets') as FormArray;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      let codigo = params.get('codigo');
      if (codigo) {
        this._httpClient
          .get(`${this.route}?codigo=${codigo}`)
          .subscribe((res) => {
            if (res.statusCode == 200) {
              this.dataJson = res.data;
              this.buildForm(this.dataJson);
            } else {
              this.errorMessage = res.message;
              console.log(this.errorMessage);
            }
          });
      }
    });
  }

  buildForm(model: any = {}) {
    this.form = this._fb.group({
      tickets: new FormArray([]),
    });
    this.ticket = this.form.get('tickets') as FormArray;
    if (model?.facturaDetalles[0]) {
      for (let item of model?.facturaDetalles[0].tickets) {
        this.ticket?.push(this.generateNewRow(item));
      }
    }
  }

  generateNewRow(model: any = {}): FormGroup {
    return new FormGroup({
      ticketId: new FormControl(model.id, Validators.required),
      cintilloNumber: new FormControl(Validators.required),
    });
  }

  submitForm() {
    swal
      .fire({
        title: 'Esta acción no podrá ser revertida',
        text: 'Seguro que desea registrar estos cintillos y dar entrada a estos tickets?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#002d68',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._httpClient
            .post(this.form.value, 'Ticket/ActivateTicket')
            .subscribe((res) => {
              if (res.statusCode == 201) {
                this.toastr.success('Registrado correctamente', 'Confirmado');
                this._router.navigate([`scan/`]);
              }
            });
        }
      });
  }
}
