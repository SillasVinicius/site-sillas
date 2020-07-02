import React, { useState } from 'react';
import Head from 'next/head';

import {
  Container,
  Jumbotron,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { FaDatabase, FaServer, FaLaptop, FaMobile, FaCode, FaTerminal, FaFacebook, FaLinkedin, FaAt, FaGithub, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
           <Head>
               <title>Home - Sillas Vinícius</title>
               <meta name="description" content="Portifólio Profissional do Sillas Vinícius Barbosa Braga" />
               <meta name="author" content="Sillas Vinícius" />
           </Head>
           <style>{`
                overflow-x: hidden;
           `}</style>
           <Navbar color="dark" dark expand="md" className="fixed-top">
               <Container>
                    <NavbarBrand href="/"><FaCode /> Sillas Vinícius</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/#inicio">Início</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#servicos">Serviços</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#portifolio">Portifólio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#rodape">Contato</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
           </Navbar>
           <Jumbotron fluid className="descr-top">
               <style>
                   {`
                       .descr-top {
                            background: linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(19,19,19,1) 83%);
                            color: #fff;
                            padding-top: 150px;
                            padding-bottom: 100px;
                            margin-bottom: 0rem !important;
                            position: relative;
                        }

                        .inicio-link {
                            position: absolute;
                            top: 0px;
                        }

                        .dev {
                            font-size:45px
                        }
                   `}
               </style>
                <Container className="text-center">
                    <a name="inicio" className="inicio-link" />
                    <p className="lead mb-4 dev"><FaTerminal /> Desenvolvedor</p>
                    <p className="lead mb-4">Quero trabalhar com os melhores profissionais, aprender e aprofundar na área de TI, através do trabalho em equipe e do convívio com pessoas qualificadas, buscando sempre evoluir.</p>
                    <p className="lead">
                        <a className="btn btn-outline-info btn-lg" href="/#rodape" role="button">ENTRE EM CONTATO</a>
                    </p>
                </Container>      
            </Jumbotron>
            <Jumbotron fluid className="servicos">
                <style>
                    {`
                        .servicos {
                            background: #fff;
                            padding-top: 80px;
                            padding-bottom: 80px;
                            margin-bottom: 0rem !important;
                            position: relative;
                        }

                        .circulo {
                            width: 140px;
                            height: 140px;
                            background-color: #17a2b8;
                            font-size: 52px;
                            padding-top: 24px;
                            color: #fff;
                        }

                        .circulo:hover {
                            background-color: #148c9f;
                            transition: 0.5s;
                        }

                        .centralizar {
                            margin: 0px auto !important;
                            float: none !important;
                        }

                        .servicos-link {
                            position: absolute;
                            top: 0px;
                        }
                    `}
                </style>
                <Container className="text-center">
                    <a name="servicos" className="servicos-link" />
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">No que posso te ajudar ?</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FaLaptop />
                                <FaMobile />
                            </div>
                            <h2 className="mt-4 mb-4">Front-End</h2>
                            <p>Tenho conhecimento para desenvolver interfaces para web e para dispositivos móveis. Utilizando de tecnologias como Angular, Ionic, React e React-Native tendo um bom conhecimento de HTML, CSS e JavaScript.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FaServer/>
                            </div>
                            <h2 className="mt-4 mb-4" >Back-End</h2>
                            <p>Criação de API's que alimentam as interfaces com dados vindos diretamente do banco de dados. utilizando do Node.js e JavaScript para a criação desses sitemas.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FaDatabase />
                            </div>
                            <h2 className="mt-4 mb-4" >Banco de Dados</h2>
                            <p>Bom conhecimento e manipulação de banco de dados, realizando consultas, inserções, deleções, atualizações, junções, procedimentos, funções e gatilhos sem muitas dificuldades. Utilizando Gereciadores de Banco de Dados como MySQL, Oracle e SQLserver</p>
                        </div>
                    </div>          
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="portifolio">
                <style>
                    {`
                        .portifolio {
                            background: #f8f9fa;
                            padding-top: 80px;
                            padding-bottom: 80px;
                            margin-bottom: 0rem !important;
                            position: relative;
                        }

                        .link {
                            text-decoration: none;
                        }

                        .link:hover {
                            text-decoration: none;
                        }

                        .portifolio-link {
                            position: absolute;
                            top: 0px;
                        }

                    `}
                </style>
                <Container className="text-center">
                    <a name="portifolio" className="portifolio-link" />
                    <div>
                        <h2 className="display-4">Portifólio</h2>
                        <p className="lead pb-4">Meus Projetos</p>
                    </div>
                    <div className="card-deck">
                        <div className="card">
                            <a target="_blank" href="https://unaroadmap.herokuapp.com/"><img src="/portifolio1.jpg" className="card-img-top" alt="img_portifolio_1"/></a>
                            <div className="card-body">
                                <h5 className="card-title">UnaRoadmap</h5>
                                <p className="card-text">Projeto feito em grupo durante o terceiro semestre da faculdade de Sistemas de Informação na faculdade UNA em Uberlândia, Minas Gerais.</p>
                                <p className="card-text"><a href="https://github.com/unaroadmap" className="link">Acessar repositório no GitHub.</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/portifolio2.jpg" className="card-img-top" alt="img_portifolio_1"/>
                            <div className="card-body">
                                <h5 className="card-title">CRUD com React</h5>
                                <p className="card-text">Projeto de crud(criação, leitura, atualização e exclusão de dados) feito com react utilizando um backend fixo com Node.js e JsonServer.</p>
                                <p className="card-text"><a href="https://github.com/SillasVinicius/React-CRUD" className="link">Acessar repositório no GitHub.</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/portifolio3.jpg" className="card-img-top" alt="img_portifolio_1"/>
                            <div className="card-body">
                                <h5 className="card-title">Calculadora com React</h5>
                                <p className="card-text">Projeto de uma calculadora simples, que realiza as operações matemáticas básicas, desenvolvida quando iniciei os estudos do React.</p>
                                <p className="card-text"><a href="https://github.com/SillasVinicius/React-Calculadora" className="link">Acessar repositório no GitHub.</a></p>
                            </div>
                        </div>
                    </div>       
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="rodape">
                <style>
                    {`
                        .rodape {
                            background: #343a40;
                            color: #fff;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            margin-bottom: 0rem !important;
                        }

                        .rodape p a {
                            font-size: 13px;
                        }

                        .rodape p {
                            font-size: 13px;
                        }
                    `}
                </style>
                <a name="rodape" />
                <Container className="text-center">
                    <footer className="footer mt-auto py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className="mt-4 mb-4">Contato</h5>
                                    <p className="text-light">
                                        <FaAt/> sillasvinicius0403@gmail.com
                                    </p>
                                    <p className="text-light">
                                        <FaPhone/> +55 31 98418-0449
                                    </p>
                                    <p>
                                        <a target="_blank" className="btn btn-outline-link text-light" href="https://www.linkedin.com/in/sillas-vinícius-840967169/" role="button"><FaLinkedin/> Linked-In</a>
                                    </p>
                                    <p>
                                        <a target="_blank" className="btn btn-outline-link text-light" href="https://github.com/SillasVinicius" role="button"><FaGithub/> GitHub</a>
                                    </p>
                                    <p>
                                        <a target="_blank" className="btn btn-outline-link text-light" href="https://www.facebook.com/people/Sillas-Vinicius/100008152723069" role="button"><FaFacebook/> Facebook</a>
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <h5 className="mt-4 mb-4">Tecnologias Utilizadas</h5>
                                    <p>ReactJs</p>
                                    <p>NodeJs</p>
                                    <p>Bootstrap</p>
                                </div>
                            </div>       
                            <span className="text-muted">Desenvolvido por Sillas Vinícius.</span>
                        </div>
                    </footer>
                </Container>
            </Jumbotron>
        </div>
    );
  }

  export default HomePage