const express = require('express')
const router = express.Router()
const fetch = require('cross-fetch')
const { response } = require('express')
const {  gql } = require('graphql-request')
const {graphQLClient} = require('../init')

module.exports.getDatasetInfo = async (datasetUrn) => {

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

module.exports.getFeatureInfo = async (featureUrn) => {
    const query = gql`
    query getDataset($urn : String!) {
        mlFeatureTable(urn: $urn) {
            name
            description
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
            
        }
    }`

    const variables = {urn: featureUrn}
        
    const data = await graphQLClient.request(query, variables)
    return data;
}

router.post('/dataset', async (req, res) => {
    const data = await this.getDatasetInfo(req.body.urn)
    res.send(data)
})