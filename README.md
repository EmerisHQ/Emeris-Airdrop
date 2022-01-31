**Submit your project's upcoming Airdrop to be listed on Emeris's Airdrop page.**

## **Airdrop submission steps:**

Submit a Pull Request for your airdrop and use this json template:

```java

{
    // General project information
    // Required upon initial submission
    "project": "Emeris", 
    "projectWebsiteUrl": "https://app.emeris.com/",
    "projectDescription": "Short intro about project",//between 30-150 words
    "chainName": "Cosmos Hub",
    "chainID": "cosmos",
    "tokenTicker": "ATOM",
    "tokenIcon": "An SVG icon",
    "airdropStartDate": "1 Feb 2022",// if unsure, please input Q1/H1 2022
    // Not required upon initial submission. Please fill out and re-submit pull request whenever you have the additional information ready
    "twitterUrl": "https://twitter.com/",
    "discordUrl": "https://discord.com/",
    "mediumUrl": "https://medium.com/",
    "airdropBlogUrl": "<url>", //link to e.g your Medium blog post that outlines the Airdrop details
    "airdropEndDate": "4 Feb 2022",

    // Airdrop eligibility information
    "snapshotDate": "25 Nov 2021 19:00 UTC",// please use UTC
    "snapshotBlockHeight": "<block-height>",

    //tokenTicker of addresses for eligibility checking 	
    "eligibleTokens": [
        "OSMO",
        "ATOM",
        "LUNA",
        "XPRT"
    ],
    
    //Plaintext to be displayed on Emeris’s Airdrop Details page
    "eligibilityCriteria": [ 
        {
            "Criteria": 1,
            "desc": "ATOM and OSMO holders, delegators and liquidity providers "
        },
        {
            "Criteria": 2,
            "desc": "Civic Likers"
        }
     ],
     
     //Endpoint to display the user's eligibility status on Emeris. 
     //Refer to Eligibility Checking Endpoint section in ReadMe  for required response formatting
     "eligibilityCheckEndpoint": "https://eligibilitycheck/<address>",

     //Airdrop’s Claim Process 
     //Does your airdrop require unanimous claim action? 
     //True = Multiple actions must be completed in order to unlock airdrop. 
     //False = each action unlocks a certain percentage of the airdrop
     "unanimousClaim": false, 
		
     //Actions required to claim the Airdrop
     //actionType: autodrop - airdrop will be automatically sent to users, 
                 //directClaim - users only need to perform one direct claim transaction to claim the entire airdrop, 
                 //plaintext - for airdrops that require actions other than autodrop or directClaim
     "claimActions": [
            {
                "action": 1,
	        "actionType": "plaintext" | "autodrop" | "directClaim",
                "desc": "Claim Airdrop", //freetype, less than 15 words
                “actionURL”: “url”,// please include url to external site if needed 
                "cosmosSDKMessageType":"/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",// please include exact Message Type for directClaim transactions
		  “unlockPercentage”: “50”
            },
            {
                "action": 2,
	        "actionType": "plaintext" | "autodrop" | "directClaim",
                "desc": "Stake some airdrop",
		  “unlockPercentage”: “50”
            }
        ]
}
```
       
**Pre-requisites:**
       
1. Your project must be built on the Cosmos SDK
2. You are airdropping to the Cosmos community
       
For airdrops with a future start date, they will be listed as **Upcoming**. 
       
Please update your JSON file once you have any updated information on the airdrop e.g confirmed eligibility criteria, snapshot date, start date. 

The airdrop will go **Live** automatically on the airdrop start date and **End** automatically on the end date. 
       
## **Eligibility Checking Endpoint:**
       
In order to display user’s eligibility on Emeris, please create and include a REST API in the above json file e.g https://us-central1-lum-network.cloudfunctions.net/airdrop/{address}
       
Emeris will send one address for every derivation path. For example Cosmos Hub and Osmosis share the same derivation path but Terra has a separate one. 
And if your airdrop’s eligibility criteria are ATOM, OSMO & LUNA holders, then Emeris will send through two addresses: one for ATOM, OSMO and another for LUNA. 
       
Please follow the following response format:

Eligible - 200 status code:
```java
{ 
"denom": "ulum",
 "address": "lum13wqpfyc4rl5rqawg6f9xur6gdvgxfhm2ysl35f", 
 
//chains and amount that user qualifies for   
"atom": "2141655651",  
"osmo": "0", 

//airdrop amounts   
"total_amount": "2141655651",   
"claimed_amount": "2141655651", 	
"unclaimed_amount": "0",

// whether users have claimed 100% of the airdrop or not 	
"claimed": true, 

// each activity unlock a % of airdrop   
"claimed_action_vote": false, 	
"claimed_action_claim": true,   
"claimed_action_delegate": true, 	
"claimed_action_register_ISCN": true, 	
"claimed_action_deposit_lp": true 
}
```
Not eligible - 403 status code:
```
<not found>
```

**If you would like to list your Airdrop privately or have any questions about the submission process, please reach out to airdrop@tendermint.com.**


