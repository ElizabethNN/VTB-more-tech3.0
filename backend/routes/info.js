const express = require('express')
const router = express.Router()
const fetch = require('cross-fetch')

router.get('/dataset/:urn', async (req, res) => {
    const dh_request = {
        method: 'POST',
        // mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-RestLi-Protocol-Version': '2.0.0',
            authorization: 'Basic ZGF0YWh1YjpkYXRhaHVi'
        },
        body: JSON.stringify({query: '{ dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)") {name urn platform {name}}}'})
    }

    console.log(JSON.stringify(dh_request))

    const response = await fetch('http://datahub.yc.pbd.ai:9002/api/graphql', dh_request)
                            .then(error => console.log(error))
                            .catch(error => console.log(error))
                            
})

module.exports = router;