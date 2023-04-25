import { DynamoDBClient, CreateTableCommand, CreateTableCommandInput } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient({ region: "us-east-1" });

const input: CreateTableCommandInput = {
    TableName : "Customer",
    KeySchema: [       
        { AttributeName: 'id', KeyType: 'HASH'},    
        { AttributeName: 'name', KeyType: 'RANGE'}  
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "name", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 100
    }
};

const run = async function () {
    try {
        const results = await client.send(new CreateTableCommand(input));
        console.log(results)
    } catch(err) {
        console.error(err)
    }
};

run();
