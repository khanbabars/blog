const axios = require('axios');

/*
axios.get('https://shazib.online/ords/general/service/demo').then(resp => { //<-- URL
    console.log(resp.data.items);
   //First row
    console.log('First row below')
    console.log(resp.data.items[0])
    //first record
    console.log('First record')
    console.log(resp.data.items[0].id)
});


*/


 fetchUser=()=>{
         axios.get('https://shazib.online/ords/general/blog/main')
         .then(response=>{console.log(response.data.items)

         })
    }


fetchUser()
