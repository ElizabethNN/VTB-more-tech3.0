const express = require('express')
const router = express.Router()
const fetch = require('cross-fetch')
const { response } = require('express')
const { GraphQLClient, gql } = require('graphql-request')


module.exports.getDatasetInfo = async (datasetUrn) => {
    const server = 'http://80.80.96.244:8080/api/graphql'

    const graphQLClient = new GraphQLClient(server, {
        headers: {
            authorization: 'Basic ZGF0YWh1YjpkYXRhaHVi'
        }
    })

    const query = gql`
        query getDataset($urn : String!) 
        {
            dataset (urn: $urn) {
                type

                platform {
                    type
                    name
                    displayName
                }

                ownership {
                    owners {
                        owner {
                            ...on CorpUser {
                                username
                            }
                            ...on CorpGroup {
                                name
                            }
                        }
                        type
                    }
                }

                status {
                    removed 
                }

                tags {
                    tags {
                        tag {
                            type
                            name
                        }
                    }
                }
            }
        }`

    const variables = {urn: datasetUrn}
    
    const data = await graphQLClient.request(query, variables)
    return data;
}

router.post('/dataset', async (req, res) => {
    const data = await this.getDatasetInfo(req.body.urn)
    res.send(data)
})

module.exports = router;