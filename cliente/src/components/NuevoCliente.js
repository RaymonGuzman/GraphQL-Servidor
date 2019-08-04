import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { NUEVO_CLIENTE } from '../mutations';

class NuevoCliente extends Component {
    state = {
      cliente: {

        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        edad: '',
        tipo: '',

      },
      error: false,

      emails: [],

    }

    NuevoEmail = () => {
      // console.log('Está funcionando');
      this.setState({
        emails: this.state.emails.concat([{ email: '' }]),
      });
    }

    EliminarInput = i => () => {
      this.setState({

        emails: this.state.emails.filter((emails, index) => i !== index),
      });
    }


    render() {
      const { error } = this.state;
      const validating = (error) ? <p className="alert alert-danger p-3 text-center"> Some required fields are missing</p> : '';
      return (
        <Fragment>

          <h2 className="text-center">Nuevo Cliente</h2>
          {validating}
          <div className="row justify-content-center">
            <Mutation
              mutation={NUEVO_CLIENTE}
              onCompleted={() => {
                this.props.history.push('/');
                // window.location.reload(); to reload the entire page
              }

                        }
            >

              {crearCliente => (


                <form
                  className="col-md-8 m-3"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const {
                      nombre, apellido, empresa, email, edad, tipo,
                    } = this.state.cliente;


                    if (nombre === '' || apellido === '' || empresa === '' || tipo === '') {
                      this.setState({ error: true });
                      return;
                    }

                    this.setState({ error: false });

                    const input = {
                      nombre,
                      apellido,
                      empresa,
                      email,
                      edad: Number(edad),
                      tipo,
                    };

                    crearCliente({
                      variables: { input },
                    });
                    console.log(input);
                  }

                                }
                >
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={(e) => {
                          this.setState({
                            cliente: {
                              ...this.state.cliente,
                              nombre: e.target.value,
                            },
                          });
                        }}
                      />

                    </div>
                    <div className="form-group col-md-6">
                      <label>Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        onChange={(e) => {
                          this.setState({
                            cliente: {
                              ...this.state.cliente,
                              apellido: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Empresa</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Empresa"
                        onChange={(e) => {
                          this.setState({
                            cliente: {
                              ...this.state.cliente,
                              empresa: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => {
                          this.setState({
                            cliente: {
                              ...this.state.cliente,
                              email: e.target.value,
                            },
                          });
                        }
                                            }
                      />
                    </div>

                    <div className="form-group justify-content-center col-md-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.NuevoEmail}
                        style={{ marginTop: '29px', paddingLeft: '1.75rem', borderRightWidth: '23px' }}
                      >
                                            +  Email

                      </button>

                    </div>

                    {this.state.emails.map((input, index) => (
                      <div key={index} className="form-group col-md-12">
                        <label>
                                                Email
                          {index + 2}
                                                :
                          {' '}
                        </label>
                        <input
                          className="col-md-12"
                          type="email"
                          placeholder="Email"
                        />
                        <button
                          type="button"
                          className="btn btn-danger"
                          key={index}
                          onClick={this.EliminarInput(index)}
                        >
                          {' '}
                                                Eliminar
                          {' '}
                        </button>


                      </div>


                    ))}


                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Edad</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Edad"
                        onChange={(e) => {
                          this.setState({
                            cliente: {
                              ...this.state.cliente,
                              edad: e.target.value,
                            },
                          });
                        }
                                            }
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Tipo Cliente</label>
                      <select
                        className="form-control"
                        onChange={(e) => {
                          this.setState({
                            cliente: {
                              ...this.state.cliente,
                              tipo: e.target.value,
                            },

                          });
                        }}
                      >
                        <option value="">Elegir...</option>
                        <option value="PREMIUM">PREMIUM</option>
                        <option value="CLASICO">CLASICO</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                </form>
              )}
            </Mutation>
          </div>
        </Fragment>
      );
    }
}

export default NuevoCliente;
