**Submit your project's upcoming Airdrop to be listed on Emeris's Airdrop page.**

## **Airdrop submission steps:**

Submit a Pull Request for your airdrop and use this json template:

```java
{
    // GENERAL PROJECT INFORMATION
    // Required upon initial submission
    "project": "Emeris",
    "projectWebsiteUrl": "https://app.emeris.com/",
    "projectDescription": "Short intro about project", // between 30-150 words
    "chainName": "Cosmos Hub",
    "chainID": "cosmoshub-4",
    "tokenTicker": "ATOM",
    "tokenIcon": "An SVG icon",
    "airdropStartDate": "2021-12-14", // please use the ISO 8601 standard. If unsure, please input Q1/H1 2022
	    
    // Not required upon initial submission. Please fill out and re-submit pull request whenever you have the information ready
    "twitterUrl": "https://twitter.com/",
    "discordUrl": "https://discord.com/",
    "mediumUrl": "https://medium.com/",
    "airdropBlogUrl": "<url>", //link to e.g your Medium blog post that outlines the Airdrop details
    "airdropEndDate": "2022-06",// please use the ISO 8601 standard 
	    
    // AIRDROP ELIGIBILITY INFOMRATION
    "snapshotDate": "2021-09-21", // please use the ISO 8601 standard 
	    
    // TokenTicker of addresses for eligibility checking 	
    "eligibleTokens": [
        "OSMO",
        "ATOM"
    ],
	    
    // Plaintext to be displayed on Emeris’s Airdrop Details page
    "eligibilityCriteria": [
    {
        "description": "ATOM stakers"
    },
    {
        "description": "OSMO liquidity providers"
    }
    ],
	
    // Endpoint to display the user's eligibility status on Emeris. 
    // Refer to Eligibility Checking Endpoint section in ReadMe for required response formatting
    "eligibilityCheckEndpoint": "https://eligibilitycheck/<address>",
	
    // AIRDROP CLAIM PROCESS
    /* Does your airdrop require unanimous claim action? 
       True = Multiple actions must be completed in order to unlock airdrop. 
       False = each action unlocks a certain percentage of the airdrop */
    "unanimousClaim": true,
	
    // Actions required to claim the Airdrop
    /* actionType (required): autodrop = airdrop will be automatically sent to users, OR
                              directClaim = users can directly claim the airdrop, OR
                              plaintext = for airdrops that require actions other than autodrop or directClaim		      
       actionOrder (optional): include when claim actions have to follow a specific order
       unlockPercentage (optional): include the percentage each action will unlock when unannimousClaim is false */
	    
    "claimActions": [
    {
    "actionOrder": "1",
    "actionType": "directClaim",
    "description": "Claim Airdrop", // freetype, less than 15 words,
    "cosmosSDKMessageType":"/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim", // please include exact Message Type and other required information for   directClaim transactions
    “unlockPercentage”: “50”
    },
    {
    "actionOrder": "2",
    "actionType": "plaintext",
    "description": "Stake some airdrop", // freetype, less than 15 words   
    “unlockPercentage”: “50”
    }
    ]
},

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
 
//chains and corresponding airdrop amount that user qualifies for   
"atom": "2141655651",  
"osmo": "0", 

//airdrop amount  
"total_amount": "2141655651",   
"claimed_amount": "2141655651", 	
"unclaimed_amount": "0",

// whether user has claimed 100% of the airdrop or not 	
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


