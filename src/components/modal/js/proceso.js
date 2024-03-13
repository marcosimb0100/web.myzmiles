import { ref } from 'vue';

const useProceso = (props) => {

    const classSize = ref(props.size);
    const classSizeCuerpo = ref(props.sizeCuerpo);

    return{
        classSize,
        classSizeCuerpo
    }

};


export default useProceso;