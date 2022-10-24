import React from "react";
import Head from "../Head";
import Nav from "../Nav";
import Side_Nav from "../Side_Nav";
import Selecionar_Localizacao_Evento from "../Selecionar_Localizacao_Evento";
import Calendario_Evento from "../Calendario_Evento";
import Requisitos_Eventos from "../../../detalhes_eventos/Requisitos_Eventos";
import Comentarios_Eventos from "../../../detalhes_eventos/Comentarios_Eventos";

export default function Criar_Eventos(){

    return(

        <div>
            <Head />,

        <body class="sb-nav-fixed">

            <Nav />

        <div id="layoutSidenav">

            <Side_Nav />

            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Criação de Eventos Todo-o-Terreno UMM</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Para criar um evento todo-o-terreno, é necessário escolher a localização do evento no mapa, de seguida selecionar a data do evento no calendário, posteriormente enumerar os requisitos do mesmo e por último fazer uma breve descrição do evento, e criar o evento</li>
                        </ol>

                        <Selecionar_Localizacao_Evento />


                        <Calendario_Evento />


                        <Requisitos_Eventos />

                        <Comentarios_Eventos />

                        <div>
                            <button>Criar Evento Todo-o-Terreno</button>
                        </div>

                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="../js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
        <script src="../assets/demo/chart-area-demo.js"></script>
        <script src="../assets/demo/chart-bar-demo.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
        <script src="../js/datatables-simple-demo.js"></script>
        </body>
    </div>

)
}