import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import PublicRoute  from './Utils/PublicRoute';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    };

    sessionStorage.removeItem('token');
    this.changeValuePassword = this.changeValuePassword.bind(this);
    this.changeValueEmail = this.changeValueEmail.bind(this);
  }

  changeValueEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  changeValuePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  loginFunction = (e) => {
    e.preventDefault();
    

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email == null || this.state.password == null){
      alert("Vui long khong bo trong thong tin");
    }else{
      console.log("data post: " + JSON.stringify(user));
      axios.post('https://eat2gether-api.herokuapp.com/api/sign-in', user)
      .then(res => {
        if(res.data.error != null){
          alert('Login false, vui long kiem tra lai thong tin');
          this.props.history.push('/');
        }else{
          alert("thanh cong");
          sessionStorage.removeItem('token');
          sessionStorage.setItem('token', res.data.token.access_token);
          this.props.history.push('/dashboard');
        }
        // console.log(res);
        // console.log(res.data.token.access_token);
      })
    }
  }


  render() {
    return (
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" name="email" onChange={this.changeValueEmail} placeholder="Email" autoComplete="email" />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="password" name="password" onChange={this.changeValuePassword} placeholder="Password" autoComplete="current-password" />
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">
                            <CButton color="primary" className="px-4" type="submit" onClick={this.loginFunction}>Login</CButton>
                          </CCol>
                          <CCol xs="6" className="text-right">
                            <CButton className="px-0">Forgot password?</CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
          )
  }
}

export default withRouter(Login);