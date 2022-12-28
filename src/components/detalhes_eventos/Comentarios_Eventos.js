import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Comentarios_Eventos(){

    const [id, setId] = useState(window.location.href.substr(39, window.location.href.length))

    return(
        <div>
        {/*-- Comments section--*/}
            <section class="mb-5" id="forum_mensagens">
                <div class="card bg-light">
                    <div class="card-header">
                        <i class="fas fa-comment me-1"></i>
                        Comentários do Evento
                    </div>
                    <div class="card-body">
                        <h5>Apenas pode comentar efetuando o login</h5>
                        {/*-- Comment with nested comments--*/}
                        <div class="d-flex mb-4">
                            {/*-- Parent comment--*/}
                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3">
                                <div class="fw-bold">João Zé</div>
                                Gostaria de saber quantas pessoas podemos levar por favor.
                                {/*-- Child comment 1--*/}
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Vasco Gomes</div>
                                        Podem levar quantas pessoas queiram, e é entrada livre
                                    </div>
                                </div>
                                {/*-- Child comment 2--*/}
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        When you put money directly to a problem, it makes a good headline.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-- Single comment--*/}
                        <div class="d-flex">
                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3">
                                <div class="fw-bold">Commenter Name</div>
                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* How to Pass Props to Link -> https://www.kindacode.com/article/react-router-passing-data-states-through-links/ */}
        <h5>Para se Inscrever no evento, faça login no <Link to={'../Login'} state={id} class="nav-link" title="Project Name">Espaço do Utilizador</Link> com a sua conta</h5>
    </div>
    )
}