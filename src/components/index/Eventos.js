import React from "react"
import {Link, Route, Routes} from "react-router-dom";


export default function Eventos(){
    
    return(
        <div id="portfolio">
            <div class="container-fluid p-0">
                
                <h2 class="text-center mt-0">Eventos Todo-O-Terreno</h2>
                    <hr class="divider" />
                <div class="row g-0">
                    <div class="col-lg-4 col-sm-6">
                        <Link to={'./Detalhes_Eventos'} class="portfolio-box"  title="Project Name">
                            <img class="img-fluid" src="../../img/umm3.jpg" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Passeio Todo-o-Terreno</div>
                                <div class="project-name">Teste1</div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box"
                           href="../../Detalhes_Evento_UMM/startbootstrap-blog-post-gh-pages/detalhes_evento.html"
                           title="Project Name">
                            <img className="img-fluid" src="../../img/umm1.jpg" alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Passeio Todo-o-Terreno</div>
                                <div className="project-name">Teste1</div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box"
                           href="../../Detalhes_Evento_UMM/startbootstrap-blog-post-gh-pages/detalhes_evento.html"
                           title="Project Name">
                            <img className="img-fluid" src="../../img/umm3.jpg" alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Passeio Todo-o-Terreno</div>
                                <div className="project-name">Teste1</div>
                            </div>
                        </a>
                    </div>
                </div>
                    
                </div>
        </div>
    )
}