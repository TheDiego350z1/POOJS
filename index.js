//primer objeto literal

const natalia = {
    name: "Natalia",
    edad: 20,
    cursosAprobados: [
        "Curso de JS",
        "Curso de HTML y CSS",
    ],
    //Creamos metodo
    aprobarCursos(nuevoCurso) {
        //this hace referencia al mismo objeto
        this.cursosAprobados.push(nuevoCurso);
    }
};

//Creamos el primer prototipo

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita",
    15,
    [
        "Curso de introducción a video",
        "Curso de introducción a foto",
    ],
);