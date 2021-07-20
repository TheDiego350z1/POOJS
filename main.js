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
    cursosAprobados: [],
    rutasDeAprendizaje: [],
});