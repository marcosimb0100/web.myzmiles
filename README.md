{
    //     "key": "3",
    //     "tipoMenu": "N1",
    //     "label": "OPERACIONES",
    //     "padre": "",
    //     "orden": 3,
    //     "icon":"",
    //     "ruta":"",
    //     "children":[]
    // }, 
    // {
    //     "key": "4",
    //     "tipoMenu": "N1",
    //     "label": "CONSULTAS / INFORMES",
    //     "padre": "",
    //     "orden": 4,
    //     "icon":"",
    //     "ruta":"",
    //     "children":[]
}









    const verificarLayOutEstadoCuenta = async(archivo, confiCarga) => {
        let indexAProcesar = -1;

        confiCarga.map((valor, index) => {
            if (archivo.type === valor.tipo) {
                indexAProcesar = index;
            }
        });

        console.log(archivo)



        

            let lector = new FileReader(archivo);
            lector.readAsText(archivo);
            lector.onload = () => resolve({
                bandera: true,
                dato: lector.result,
                configProceso: confiCarga[indexAProcesar]
            });

        



    };


    proveedor@correo.com
    proveedor