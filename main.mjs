function videoPlay(id) {
    const ulrSecreta = "No debes ver esto" + id;
    console.log("se esta reprodución el video desde" + ulrSecreta);
}

function videoPausa(id) {
    const ulrSecreta = "No debes ver esto" + id;
    console.log("se ha pausado el video" + id);
}

export class PlaziClass {
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
    }) {
        this._name = name;
        this.clases = clases;
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
}

const diego = new Student3 ({
    name: "Diego",
    email: "diego@gmail.com",
    userName: "DiegoG",
    rutasDeAprendizaje: [
        escuelaDeDesarrolloWeb,
    ],
});