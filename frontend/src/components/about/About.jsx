import React from "react";
import PageHeader from "../../template/pageHeader/PageHeader.jsx";


function About() {
    return (
        <div>
            <PageHeader name="Sobre" small="nós" />
            <h2>Nossa História</h2>
            <p>
                Nesta parte, você contará sobre a criação e progresso da empresa, até os dias atuais.
                Ex: fundada em 1900, estamos no mercado de [segmento] há XX anos…
            </p>
            <h2>Missão e Visão</h2>
            <p>
                Responde às perguntas mais fundamentais de todas:
                Porque sua empresa existe?
                Qual seu propósito maior?
                O que sua empresa faz?
                Para quem ela faz? A quem ela se destina?
                Exemplo: Missão do Google: Organizar a informação mundial para torná-la universalmente acessível e útil.
                A missão precisa ser original e representar a personalidade da sua marca, fazer sentido a longo prazo e ser memorável.
                Quanto mais simples e objetiva, melhor.

                É importante estabelecer a perspectiva de longo prazo. Inspira o que se almeja para o futuro da empresa.
                É uma das partes mais importantes, pois o objetivo principal é criar uma ideia de futuro do seu negócio — mesmo objetivo desta mentoria.
                Exemplo: Visão da Nike: Ajudar a empresa Nike e nossos consumidores a prosperarem em uma economia sustentável onde pessoas, lucros e planetas estão em equilíbrio.
                Outro exemplo: Visão da Unilever: Nossa visão é aumentar nossos negócios, enquanto desassociamos o crescimento da pegada ambiental e aumentamos o impacto social positivo.
                Uma visão que faça sentido precisa visualizar a situação da empresa em 5 anos, ser escrita no futuro, mostrar a direção a ser seguida, ser ambiciosa e ousada e mostrar qual o impacto que essa direção irá causar no mundo.
            </p>
        </div>
    )
}

export default About;