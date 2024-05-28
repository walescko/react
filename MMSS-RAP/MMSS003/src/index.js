import "./styles.css";

function Cabecalho(){
    return ReadableByteStreamController.createElement(
        "header",
        {className: "cabecalho"}, React.createElement("h1", {}, "Editora MoujorTec")
    )
}
ReactDOM.render(Cabecalho(), document.getElementById("root"));


function Rodape(){
    return ReadableByteStreamController.createElement(
        "footer",
        {className: "rodape"}, React.createElement("p",{}, "Rodapé")
    );
}

ReactDOM.render(Rodape(), document.getElementById("root"));