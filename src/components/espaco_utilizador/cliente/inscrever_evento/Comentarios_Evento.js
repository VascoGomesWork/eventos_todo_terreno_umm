import React from "react";


export default function Comentarios_Evento(){

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
                        {/*-- Comment with nested comments--*/}
                        <div class="d-flex mb-4">
                            {/*-- Parent comment-->*/}
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
                        {/*-- Comment form--*/}
                        <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                    </div>
                </div>
            </section>
            <button>Inscrever em Evento Todo-o-Terreno</button>
        </div>
    )
}