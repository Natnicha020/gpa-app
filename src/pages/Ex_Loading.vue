<template>
    <div class="q-ma-md"></div>
        <q-btn label="Load data" @click="loadData" />
    </template>

    <script setup>
    import { useQuasar } from 'quasar';
    const $q = useQuasar()
    const loadData = () => {
        $q.loading.show()
        //     spinner: null,
        //     message: `<div class='text-center'> 
        //         <img src='https://media1.tenor.com/m/Lbto9-mZeXcAAAAC/crtsfiles-keonho.gif'
        //         style='width: 150px; height 150px; border-radius: 8px;'>
        //         <div class='q-mt-md text-h6'>รอ กอนโฮเต้นสักครู่....</div>
        //         </div>`,
        //     html: true,
        //     backgroundColor: 'dark',
        //     messageColor: 'white'
        // })
        // $q.loading.show({ 
        //     message: 'Loading data...',
        //     spinner: QSpinnerFacebook,
        //     spinnerColor: 'yellow',
        //     spinnerSize: 100,
        //     backgroundColor: 'purple-2',
        //     messageColor: 'blue'
        // })
        setTimeout(()=>{
            $q.loading.hide()
            $q.notify({
                type: 'positive',
                message: 'Load data success'
            })
        }, 5000)
    }


   
</script>