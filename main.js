class Commentario {
    constructor({
        content,
        studentName,
        studentRole = "Estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.content);
    }
}


function videoPlay(id) {
    const ulrSecreta = "No debes ver esto" + id;
    console.log("se esta reprodución el video desde" + ulrSecreta);
}

function videoPausa(id) {
    const ulrSecreta = "No debes ver esto" + id;
    console.log("se ha pausado el video" + id);
}

class PlaziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name,
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoPausa(this.videoID);
    }
}

class Cursos {
    constructor({
        name,
        clases = [],
        isFree = false,
    }) {
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        this._name = nuevoNombre;
    }
}

const cursoPrograBasica = new Cursos({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
});

class Clases {
    constructor({
        name
    }) {
        this.name = name;
    }
}

class RutasDeAprendizaje {
    constructor({
        name,
        cursos,
    }) {
        this.name = name;
        this.cursos = cursos;
    }
}

const escuelaDeDesarrolloWeb = new RutasDeAprendizaje ({
    name: "Escuela de Desarollo Web",
    cursos: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
});

class Student3 {
    constructor({
        name,
        email,
        userName,
        twiter = undefined,
        facebook = undefined,
        instagram = undefined,
        cursosAprobados = [],
        rutasDeAprendizaje = [],

    }) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twiter,
            facebook,
            instagram,
        };
        this.cursosAprobados = cursosAprobados;
        this.rutasDeAprendizaje = rutasDeAprendizaje;
    }
    publicarComentario(commentContent) {
        const comment = new Commentario({
            comment: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class Teacher extends Student3 {
    constructor(props) {
        super(props); //Con la palabra super(); hacemos referencia a la clase madre
    }
    aprobarCurso(newCurso) {
        if (newCurso.isFree) {
            this.cursosAprobados.push(newCurso);
        } else {
            console.warn("Lo sentimos, " + this.name + " Paga");
        }
    }
    publicarComentario(commentContent) {
        const comment = new Commentario({
            comment: commentContent,
            studentName: this.name,
            studentRole: "Teacher",
        });
        comment.publicar();
    }

}

// Herencia! 
class FreeStudent extends Student3{
    constructor(props) {
        super(props); //Con la palabra super(); hacemos referencia a la clase madre
    }

    aprobarCurso(newCurso) {
        if (newCurso.isFree) {
            this.cursosAprobados.push(newCurso);
        } else {
            console.warn("Lo sentimos, " + this.name + " Paga");
        }
    }
}

const diego = new FreeStudent ({
    name: "Diego",
    email: "diego@gmail.com",
    userName: "DiegoG",
    rutasDeAprendizaje: [
        escuelaDeDesarrolloWeb,
    ],
});

const antonio = new Teacher ({
    name: "Antonio",
    email: "diegoadad",
    userName: "atonio",
    rutasDeAprendizaje: [
        escuelaDeDesarrolloWeb,
    ],
});