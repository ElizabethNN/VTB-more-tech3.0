const app = require("./../init.js");
const {getDatasetInfo} = require("./info");
const express = require('express')
const router = express.Router()

var tables = ["urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)", "urn:li:dataset:(urn:li:dataPlatform:foo,bar1,PROD)", "urn:li:dataset:(urn:li:dataPlatform:foo,bar2,PROD)","urn:li:dataset:(urn:li:dataPlatform:foo,bar3,PROD)", "urn:li:dataset:(urn:li:dataPlatform:foo,bar4,PROD)", "urn:li:dataset:(urn:li:dataPlatform:foo,bar5,PROD)"];
var tablesDict = {
    "urn:li:dataset:(urn:li:dataPlatform:foo,bar,PROD)":{
        "dataset": {
          "type": "DATASET",
          "platform": {
            "type": "DATA_PLATFORM",
            "name": "Dataset предпочтений пользователей Я.Музыки за сентябрь 2021-го года.",
            "displayName": null,
            "description": "A dataset prepared by Yandex, focused on the analysis of preferences, tastes and directions of development in the service."
          },
          "ownership": {
            "owners": [
              {
                "owner": {
                  "username": "elizabethnn"
                },
                "type": "DATAOWNER"
              }
            ]
          },
          "status": null,
          "tags": {
            "tags": [
              {
                "tag": {
                  "type": "TAG",
                  "name": "private"
                }
              }
            ]
          }
        }
      },
      "urn:li:dataset:(urn:li:dataPlatform:foo,bar1,PROD)":{
        "dataset": {
          "type": "DATASET",
          "platform": {
            "type": "DATA_PLATFORM",
            "name": "Dataset англоязычных фейк-новостей из социальной сети Facebook.",
            "displayName": null,
            "description": "A dataset for training neural networks to detect fake news."
          },
          "ownership": {
            "owners": [
              {
                "owner": {
                  "username": "elizabethnn"
                },
                "type": "DATAOWNER"
              }
            ]
          },
          "status": null,
          "tags": {
            "tags": [
              {
                "tag": {
                  "type": "TAG",
                  "name": "private"
                }
              }
            ]
          }
        }
      },
      "urn:li:dataset:(urn:li:dataPlatform:foo,bar2,PROD)":{
        "dataset": {
            "type": "DATASET",
            "platform": {
              "type": "DATA_PLATFORM",
              "name": "Итоговый dataset продаж Газпром-а за январь 2020 года.",
              "displayName": null,
              "description": "Dataset of the Gazprom company, aimed at the analysis of the market and sales."
            },
            "ownership": {
              "owners": [
                {
                  "owner": {
                    "username": "elizabethnn"
                  },
                  "type": "DATAOWNER"
                }
              ]
            },
            "status": null,
            "tags": {
              "tags": [
                {
                  "tag": {
                    "type": "TAG",
                    "name": "private"
                  }
                }
              ]
            }
          }
      },
      "urn:li:dataset:(urn:li:dataPlatform:foo,bar3,PROD)":{
        "dataset": {
            "type": "DATASET",
            "platform": {
              "type": "DATA_PLATFORM",
              "name": "Dataset самых популярных поисковых запросов Яндекс за сентябрь-октябрь 2021-го года.",
              "displayName": null,
              "description": "Dataset of millions of user requests for a certain period."
            },
            "ownership": {
              "owners": [
                {
                  "owner": {
                    "username": "elizabethnn"
                  },
                  "type": "DATAOWNER"
                }
              ]
            },
            "status": null,
            "tags": {
              "tags": [
                {
                  "tag": {
                    "type": "TAG",
                    "name": "private"
                  }
                }
              ]
            }
          }
      },
      "urn:li:dataset:(urn:li:dataPlatform:foo,bar4,PROD)":{
        "dataset": {
            "type": "DATASET",
            "platform": {
              "type": "DATA_PLATFORM",
              "name": "Dataset of phishing attacks on Yandex mailboxes.",
              "displayName": null,
              "description": "For 2020."
            },
            "ownership": {
              "owners": [
                {
                  "owner": {
                    "username": "elizabethnn"
                  },
                  "type": "DATAOWNER"
                }
              ]
            },
            "status": null,
            "tags": {
              "tags": [
                {
                  "tag": {
                    "type": "TAG",
                    "name": "private"
                  }
                }
              ]
            }
          }
      },
      "urn:li:dataset:(urn:li:dataPlatform:foo,bar5,PROD)":{
        "dataset": {
            "type": "DATASET",
            "platform": {
              "type": "DATA_PLATFORM",
              "name": "Dataset of phishing attacks on Mail ru mailboxes.",
              "displayName": null,
              "description": "For 2019."
            },
            "ownership": {
              "owners": [
                {
                  "owner": {
                    "username": "elizabethnn"
                  },
                  "type": "DATAOWNER"
                }
              ]
            },
            "status": null,
            "tags": {
              "tags": [
                {
                  "tag": {
                    "type": "TAG",
                    "name": "private"
                  }
                }
              ]
            }
          }
      }
}

router.get("/getAllTables", async (req, res)=>{
    var answer = []
    for(element in tables){
        var table
        try{
            table = await getDatasetInfo(tables[element])
        }
        catch{
            table = tablesDict[tables[element]]; 
        }
        console.log(table);
        answer.push({
            id: tables[element],
            dataset: table.dataset.platform.name,
            description: table.dataset.platform.name || ""
        })
    }
    res.send(answer);
})

router.post("/getTableInfo", async (req, res)=>{
    var dataset
    try{
        dataset = await getDatasetInfo(req.body.id);
    }
    catch{
        dataset = tablesDict[req.body.id];
    }
    res.send(dataset);
})

module.exports = router
