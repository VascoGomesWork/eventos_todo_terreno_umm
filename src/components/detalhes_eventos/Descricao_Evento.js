import React from "react";

export default function Descricao_Evento(){

    return(

        {/*  Make Some Padding Top Here */},
        {/*-- Post content--*/},
        <article>
            <header class="mb-4">

                <h1 class="fw-bolder mb-1">Passeio Todo-o-Terreno</h1>

                <div class="text-muted fst-italic mb-2">Posted on January 1, 2022 by Vasco Gomes</div>

                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Passeio</a>
                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Todo-o-Terreno</a>
            </header>

            <figure class="mb-4"><img class="img-fluid rounded" src="../../img/umm1.jpg" alt="..." /></figure>

            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    Passeio Todo-o-Terreno em Lagoa
                </div>
                <div class="card-body">

                    <p class="fs-5 mb-4">Este passeio irá decorrer no dia 05/10/2022, no Algarve. Iremos agrupar-nos em Lagoa junto do recinto da Fatacil, onde de seguida iremos para os montes ver o que as nossas máquinas conseguem fazer.</p>

                    <p class="fs-5 mb-4">Vai haver um lanche ás 10:30, onde se pode esticar as pernas e comer descansado.</p>

                    <p class="fs-5 mb-4">Vamos almoçar por volta da 13:15 da tarde</p>

                    <p class="fs-5 mb-4">Qualquer questão que tenham, podem colocá-la no fórum de comentários.</p>

                    <p class="fs-5 mb-4">Obrigado e façam as vossas questões atempadamente.</p>
                </div>
            </div>
        </article>

    )

}