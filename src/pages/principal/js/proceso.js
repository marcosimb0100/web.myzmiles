import { ref, watch } from 'vue';
import { formatoMexico } from '../../../helpers/general';
import { useStore } from 'vuex';
import fileDownload  from 'js-file-download';

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const useProceso = () => {

    const store = useStore();

    const title = ref('Service');
    const arrayDeals = ref([]);

    const proveedor = ref((localStorage.getItem('proveedor') === null && localStorage.getItem('proveedor') === '') ? '' : localStorage.getItem('proveedor'));

    const modalNotes = ref(false);
    const modalFiles = ref(false);
    const modalDeclined = ref(false);
    const modalUploadFile = ref(false);
    const arrayNotes = ref([]);
    const arrayFiles = ref([]);
    const stringToken = ref('');
    const stringParent_Id = ref('');
    const filesUpload = ref(null);
    const idDecline = ref('');
    const reasonDecline = ref('');
    const idInteres = ref('');
    const selectStatus = ref({
        option: 'Pending', descripcion: 'Pending'
    });
    const arraySelect = ref([{
        option: 'Pending', descripcion: 'Pending'
    },
    {
        option: 'Approved', descripcion: 'Approved'
    }]);
    const arrayFilesUpload = ref(null);
    const stringFilesUpload = ref('');
    const id_produce = ref('');
    const id_contact_produce = ref('');
    const id_interest_produce = ref('');
    const arrayStatus = ref([
        { status: 'Pending', description: 'Pending' },
        { status: 'Approved', description: 'Approved' },
        // { status: 'Produce (ok)', description: 'Produce (ok)' },
        { status: 'Declined', description: 'Declined' }
    ]);
    const selectedStatus = ref({ status: 'Pending', description: 'Pending' });
    const dataDeal = ref([]);

    const confirm = useConfirm();
    const toast = useToast();
    const upperAlignersInput = ref(0);
    const lowerAlignersInput = ref(0);
    const numberAlignersInput = ref(0);

    const btnProduceOkDisable = ref(true);


    const handleService = async() => {

        arrayDeals.value = [];
        

        if( proveedor.value === 'verificador' ){

            const resp = await store.dispatch('api/fn_data_get_ptd', {
                mostrarNotificacion: false,
                direccion: `/api/zoho/deals`
            });

            if (resp.status === 200) {
                if (resp.data.length > 0) {
                    dataDeal.value = resp.data;
                    dataDeal.value.map((data) => {
                        if (data.Interest.name === 'Aligners' && ( data.Status_Validation === null || data.Status_Validation === 'Pending' ) ) {
                            arrayDeals.value = [...arrayDeals.value, {
                                id: data.id,
                                Deal_Name: data.Deal_Name,
                                Interest: data.Interest === null ? '' : data.Interest.name,
                                Number_aligners: data.Number_aligners,
                                Upper_aligners: data.Upper_aligners,
                                Lower_aligners: data.Lower_aligners,
                                Status: data.Status_Validation,
                                Amount: data.Amount,
                                Closing_Date: data.Closing_Date,
                                Status_Validation: 'Pending',
                                Id_Contact: data.Id_Contact,
                                Id_Interest: data.Id_Interest
                            }];
                        }
                    });
                }
            }
        }


        if( proveedor.value === 'fabricante' ){

            const resp = await store.dispatch('api/fn_data_get_ptd', {
                mostrarNotificacion: false,
                direccion: `/api/zoho/deals_fab`
            });

            if (resp.status === 200) {

                if (resp.data.length > 0) {

                    await resp.data.map((data) => {

                        if (data.Interest.name === 'Aligners' && ( data.Status_Validation === null || data.Status_Validation === 'Approved' ) && ( data.Stage_Replica === null || data.Stage_Replica === 'Finished' ) ) {

                            arrayDeals.value = [...arrayDeals.value, {
                                id: data.id,
                                Deal_Name: data.Deal_Name,
                                Interest: data.Interest === null ? '' : data.Interest.name,
                                Number_aligners: data.Number_aligners,
                                Upper_aligners: data.Upper_aligners,
                                Lower_aligners: data.Lower_aligners,
                                Status: data.Status_Validation,
                                Amount: data.Amount,
                                Closing_Date: data.Closing_Date,
                                Status_Validation: data.Status_Validation,
                                Id_Contact: data.Id_Contact,
                                Id_Interest: data.Id_Interest,
                                Stage_Replica: data.Stage_Replica
                            }];
    
                        }

                    });

                }

            }

        }

    };
    handleService();


    const handleTableDeal = async() => {
        
        arrayDeals.value = [];
        const resp = await store.dispatch('api/fn_data_get_ptd', {
            mostrarNotificacion: false,
            direccion: `/api/zoho/deals`
        });

        if (resp.status === 200) {
            if (resp.data.length > 0) {
                dataDeal.value = resp.data;

                    dataDeal.value.map((data) => {

                        if( selectedStatus.value.status === 'Pending' ){
                            if (data.Interest.name === 'Aligners' && ( data.Status_Validation === null || data.Status_Validation === 'Pending' ) ) {
                                arrayDeals.value = [...arrayDeals.value, {
                                    id: data.id,
                                    Deal_Name: data.Deal_Name,
                                    Interest: data.Interest === null ? '' : data.Interest.name,
                                    Number_aligners: data.Number_aligners,
                                    Upper_aligners: data.Upper_aligners,
                                    Lower_aligners: data.Lower_aligners,
                                    Status: data.Status_Validation,
                                    Amount: data.Amount,
                                    Closing_Date: data.Closing_Date,
                                    Status_Validation: 'Pending',
                                    Id_Contact: data.Id_Contact,
                                    Id_Interest: data.Id_Interest
                                }];
                            }
                        }

                        if( selectedStatus.value.status === 'Approved' ){
                            if (data.Interest.name === 'Aligners' && ( data.Status_Validation === 'Approved' ) ) {
                                arrayDeals.value = [...arrayDeals.value, {
                                    id: data.id,
                                    Deal_Name: data.Deal_Name,
                                    Interest: data.Interest === null ? '' : data.Interest.name,
                                    Number_aligners: data.Number_aligners,
                                    Upper_aligners: data.Upper_aligners,
                                    Lower_aligners: data.Lower_aligners,
                                    Status: data.Status_Validation,
                                    Amount: data.Amount,
                                    Closing_Date: data.Closing_Date,
                                    Status_Validation: 'Approved',
                                    Id_Contact: data.Id_Contact,
                                    Id_Interest: data.Id_Interest
                                }];
                            }
                        }

                        if( selectedStatus.value.status === 'Produce (ok)' ){
                            if (data.Interest.name === 'Aligners' && ( data.Status_Validation === 'Produce (ok)' ) ) {
                                arrayDeals.value = [...arrayDeals.value, {
                                    id: data.id,
                                    Deal_Name: data.Deal_Name,
                                    Interest: data.Interest === null ? '' : data.Interest.name,
                                    Number_aligners: data.Number_aligners,
                                    Upper_aligners: data.Upper_aligners,
                                    Lower_aligners: data.Lower_aligners,
                                    Status: data.Status_Validation,
                                    Amount: data.Amount,
                                    Closing_Date: data.Closing_Date,
                                    Status_Validation: 'Produce (ok)',
                                    Id_Contact: data.Id_Contact,
                                    Id_Interest: data.Id_Interest
                                }];
                            }
                        }

                        if( selectedStatus.value.status === 'Declined' ){
                            if (data.Interest.name === 'Aligners' && ( data.Status_Validation === 'Declined' ) ) {
                                arrayDeals.value = [...arrayDeals.value, {
                                    id: data.id,
                                    Deal_Name: data.Deal_Name,
                                    Interest: data.Interest === null ? '' : data.Interest.name,
                                    Number_aligners: data.Number_aligners,
                                    Upper_aligners: data.Upper_aligners,
                                    Lower_aligners: data.Lower_aligners,
                                    Status: data.Status_Validation,
                                    Amount: data.Amount,
                                    Closing_Date: data.Closing_Date,
                                    Status_Validation: 'Declined',
                                    Id_Contact: data.Id_Contact,
                                    Id_Interest: data.Id_Interest
                                }];
                            }
                        }
                        

                    });

                }

            }


    };


    const handleShowNotes = async(id) => {

        arrayNotes.value = [];
        modalNotes.value = true;

        if( proveedor.value === 'verificador' ){
            
            const resp = await store.dispatch('api/fn_data_get_ptd', {
                mostrarNotificacion: false,
                direccion: `/api/zoho/requests_notes/${id}`
            });
    
            if (resp.status === 200) {
                arrayNotes.value = resp.data;
            }

        }else if( proveedor.value === 'fabricante' ){

            const resp = await store.dispatch('api/fn_data_get_ptd', {
                mostrarNotificacion: false,
                direccion: `/api/zoho/requests_notes_fab/${id}`
            });
    
            if (resp.status === 200) {
                arrayNotes.value = resp.data;
            }

        }

    }


    const handleCloseNotes = () => {
        modalNotes.value = false;
        arrayNotes.value = [];
    }


    const handleShowFiles = async(id, id_contacto, id_interes) => {

        arrayFiles.value = [];
        modalFiles.value = true;
        idInteres.value = id_interes;

        if( proveedor.value === 'verificador' ){

            const resp = await store.dispatch('api/fn_data_get_ptd', {
                mostrarNotificacion: false,
                direccion: `/api/zoho/files_prov/${id_contacto}/${id_interes}`
            });
            
            if (resp.status === 200) {
                arrayFiles.value = resp.data.filesDrivers;
                stringToken.value = resp.data.token;
                stringParent_Id.value = resp.data.parent_id;
    
            }

        }else if( proveedor.value === 'fabricante' ){

            const resp = await store.dispatch('api/fn_data_get_ptd', {
                mostrarNotificacion: false,
                direccion: `/api/zoho/files_fab/${id_contacto}/${id_interes}`
            });
            
            if (resp.status === 200) {
                arrayFiles.value = resp.data.filesDrivers;
                stringToken.value = resp.data.token;
                stringParent_Id.value = resp.data.parent_id;
    
            }

        }
    

    }


    const handleCloseFiles = () => {
        modalFiles.value = false;
        arrayFiles.value = [];
        idInteres.value = '';
    }


    const handleShowApproved = (id) => {

        confirm.require({
            header: 'Approved',
            message: 'Are you sure you want to pass?',
            icon: 'pi pi-exclamation-triangle',
            rejectClass: 'p-button-secondary p-button-outlined',
            rejectLabel: 'No',
            acceptLabel: 'Yes',
            accept: async() => {
                const resp = await store.dispatch('api/fn_data_put_ptd', {
                    mostrarNotificacion: false,
                    direccion: `/api/zoho/deals_update`,
                    datos: {
                        id: id,
                        Status_Validation: 'Approved'
                    }
                });
                if( resp.status === 200 ){
                    handleTableDeal();
                    toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Has been accepted', life: 3000 });
                }
            },
            reject: () => {
            }
        });

    };


    const handleDownloadFile = async(file, name) => {

        if( proveedor.value === 'verificador' ){

            const resp = await store.dispatch('api/fn_file_post_ptd', {
                mostrarNotificacion: false,
                direccion: '/api/zoho/files_download/',
                datos: {
                    file : file,
                    name: `${idInteres.value}_${name}`
                }
            });
    
            if( resp.status === 200 ){
                fileDownload(resp.data, `${idInteres.value}_${name}`);
            }

        }else if( proveedor.value === 'fabricante' ){

            const resp = await store.dispatch('api/fn_file_post_ptd', {
                mostrarNotificacion: false,
                direccion: '/api/zoho/files_download_fab/',
                datos: {
                    file : file,
                    name: `${idInteres.value}_${name}`
                }
            });
    
            if( resp.status === 200 ){
                fileDownload(resp.data, `${idInteres.value}_${name}`);
            }

        }

    };


    const handleShowDeclined = async(id) => {

        modalDeclined.value = true;
        idDecline.value = id;

    };


    const handleCloseDeclined = () => {
        modalDeclined.value = false;
        reasonDecline.value = '';
        idDecline.value = '';
    };


    const handleUpdateStatusDeclined = async() => {

        const resp = await store.dispatch('api/fn_data_put_ptd', {
            mostrarNotificacion: false,
            direccion: `/api/zoho/deals_update_declined`,
            datos: {
                id: idDecline.value,
                Status_Validation: 'Declined',
                Reason_Decline: reasonDecline.value
            }
        });

        if(resp.status === 200){
            handleCloseDeclined();
            handleTableDeal();
        }

    };


    const handleShowProdece = (id, idcontact, idinterest) => {
        id_produce.value = id;
        id_contact_produce.value = idcontact;
        id_interest_produce.value = idinterest;
        modalUploadFile.value = true;
    };


    const handleUpdateUpperAligners = () => {
        if( Number(lowerAlignersInput.value) < Number(upperAlignersInput.value) ) {
            numberAlignersInput.value = upperAlignersInput.value;
        }else{
            numberAlignersInput.value = lowerAlignersInput.value;
        }
    };


    const handleUpdateLowerAligners = () => {
        if( Number(lowerAlignersInput.value) < Number(upperAlignersInput.value) ) {
            numberAlignersInput.value = upperAlignersInput.value;
        }else{
            numberAlignersInput.value = lowerAlignersInput.value;
        }
    };


    const handleCloseProduce = () => {
        id_produce.value = '';
        id_contact_produce.value = '';
        id_interest_produce.value = '';
        arrayFilesUpload.value = null;
        stringFilesUpload.value = '';
        upperAlignersInput.value = 0;
        lowerAlignersInput.value = 0;
        numberAlignersInput.value = 0;
        modalUploadFile.value = false;
    };


    const handleModalProduce = async() => {

        let formData = new FormData()

        formData.append('id', id_produce.value);
        formData.append('id_contact', id_contact_produce.value);
        formData.append('id_interest', id_interest_produce.value);
        formData.append('stringFilesUpload', stringFilesUpload.value);
        formData.append('upperAlignersInput', upperAlignersInput.value);
        formData.append('lowerAlignersInput', lowerAlignersInput.value);
        formData.append('numberAlignersInput', numberAlignersInput.value);
        formData.append('status', 'Produce (ok)');

        if( arrayFilesUpload.value !== null ){
            for (const file of arrayFilesUpload.value) {
                formData.append('files', file, file.name);
            }
        }

        const resp = await store.dispatch('api/fn_formdata_produce_zoho', {
            mostrarNotificacion: false,
            direccion: `/api/zoho/produce_ok`,
            formData
        });

        if( resp.status ){
            handleCloseProduce();
            handleTableDeal();
        }

        

    };


    const handleUploadFile = async(e) => {
        const { files } = e.target;
        arrayFilesUpload.value = files;
    };


    watch([modalNotes], (data) => {
        if (!data[0]) {
            handleCloseNotes();
        }
    });


    watch([modalUploadFile], (data) => {
        if (!data[0]) {
            handleCloseProduce();
        }
    });


    watch([arrayFilesUpload, stringFilesUpload, upperAlignersInput, lowerAlignersInput, numberAlignersInput ], (data) => {
        if( (data[0] !== null || data[1].length > 0) && data[2] > 0 && data[3] > 0 ){
            btnProduceOkDisable.value = false;
        }else{
            btnProduceOkDisable.value = true;
        }
        
    });


    return {
        proveedor,
        formatoMexico,
        title,
        arrayDeals,
        modalNotes,
        modalFiles,
        modalDeclined,
        modalUploadFile,
        arrayNotes,
        arrayFiles,
        stringToken,
        stringParent_Id,
        selectStatus,
        arraySelect,
        filesUpload,
        reasonDecline,
        idInteres,
        stringFilesUpload,
        id_produce,
        id_contact_produce,
        id_interest_produce,
        arrayStatus,
        selectedStatus,
        upperAlignersInput,
        lowerAlignersInput,
        numberAlignersInput,
        btnProduceOkDisable,

        handleService,
        handleShowNotes,
        handleShowDeclined,
        handleCloseNotes,
        handleCloseDeclined,
        handleShowFiles,
        handleCloseFiles,
        handleUpdateUpperAligners,
        handleUpdateLowerAligners,
        handleDownloadFile,
        handleUploadFile,
        handleUpdateStatusDeclined,
        handleShowApproved,
        handleShowProdece,
        handleModalProduce,
        handleCloseProduce,
        handleTableDeal
        
    }
};

export default useProceso;




    // const handleUpdateStatus = async(id, status) => {
        
    //     const Upper_aligners = await arrayDeals.value.find( e => e.id === id ).Upper_aligners;
    //     const Lower_aligners = await arrayDeals.value.find( e => e.id === id ).Lower_aligners;
    //     const Number_aligners = await arrayDeals.value.find( e => e.id === id ).Number_aligners;

    //     const resp = await store.dispatch('api/fn_data_put_ptd', {
    //         mostrarNotificacion: false,
    //         direccion: `/api/zoho/deals_update`,
    //         datos: {
    //             id: id,
    //             Status_Validation: status,
    //             Upper_aligners: Upper_aligners,
    //             Lower_aligners: Lower_aligners,
    //             Number_aligners: Number_aligners,
    //             Reason_Decline: ''
    //         }
    //     });

    //     if(resp.status === 200){
    //         handleService();
    //     }

    // };

    // const handleUpdateStatusFab = async(id, status) => {
        
    //     const resp = await store.dispatch('api/fn_data_put_ptd', {
    //         mostrarNotificacion: false,
    //         direccion: `/api/zoho/deals_update_fab`,
    //         datos: {
    //             id: id,
    //             Stage_Replica: status
    //         }
    //     });

    //     if(resp.status === 200){
    //         handleService();
    //     }

    // };