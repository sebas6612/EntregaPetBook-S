import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let component : AppComponent;

  beforeEach(waitForAsync(() => {
    component = new AppComponent();
  }));

  it('Se espera que cree el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Al cargar la vista debe existir la variable con el nombre del proyecto', () =>{
    let titulo : string = component.title
    expect(titulo).toEqual('pet-book');
  });

  it('Cuando se inicia la vista, debe existir contenedor y un enrutador', () => {
    const componentes =  TestBed.createComponent(AppComponent);
    componentes.detectChanges();
    const ejecucion = componentes.nativeElement;
    expect(ejecucion.querySelector('.content router-outlet'));
  }); 

});