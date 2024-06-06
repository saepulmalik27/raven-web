const routes = {
    register : '/register',
    login : '/login',
    home : '/',
    testimony : '/ulasan',
    explore : '/pencarian',
    detail : (id : string) =>  `/destinasi-wisate/${id}`
}

export default routes