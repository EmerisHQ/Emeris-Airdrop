{
    // General project information
    // Required upon initial submission
    "project": "LikeCoin",
    "projectWebsiteUrl": "https://about.like.co/",
    "projectDescription": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.", //between 30-150 words
    "chainName": "LikeCoin",
    "chainID": "likecoin-mainnet-2",
    "tokenTicker": "LIKE",
    "tokenIcon": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/like.svg",
    "airdropStartDate": "H1 2022", // if unsure, please input Q1/H1 2022
    // Not required upon initial submission. Please fill out and re-submit pull request whenever you have the additional information ready
    "twitterUrl": "https://twitter.com/likecoin",
    "discordUrl": "https://discord.com/invite/W4DQ6peZZZ",
    "mediumUrl": "https://blog.like.co/",
    "airdropBlogUrl": "https://blog.like.co/proposal-to-fairdrop-likecoin-to-the-cosmos-community-and-civic-likers-d64d841287d8", //link to e.g your Medium blog post that outlines the Airdrop details
    //"airdropEndDate": "4 Feb 2022",

    // Airdrop eligibility information
    //"snapshotDate": "25 Nov 2021 19:00 UTC",// please use UTC
    //"snapshotBlockHeight": "<block-height>",

    
    //tokenTicker of addresses for eligibility checking 
    "eligibilityTokens": [
        "OSMO",
        "ATOM"
    ] 
    
},

    //Plaintext to be displayed on Emeris’s Airdrop Details page
    "eligibilityCriteria": [
    {
        "Criteria": 1,
        "desc": "ATOM and OSMO holders, delegators and liquidity providers "
    },
    {
        "Criteria": 2,
        "desc": "Civic Liker"
    }
],

    //Endpoint to display the user's eligibility status on Emeris. 
    //Refer to Eligibility Checking Endpoint section in ReadMe  for required response formatting
   "eligibilityCheckEndpoint": "ttps://airdrop.like.co/api/claims?type=emeris&address=<address>>",
       
    //Airdrop’s Claim Process 
     //Does your airdrop require unanimous claim action? 
     //True = Multiple actions must be completed in order to unlock airdrop. 
     //False = each action unlocks a certain percentage of the airdrop
     //"unanimousClaim": false, 
		
     //Actions required to claim the Airdrop
     //actionType: autodrop - airdrop will be automatically sent to users, 
                 //directClaim - users only need to perform one direct claim transaction to claim the entire airdrop, 
                 //plaintext - for airdrops that require actions other than autodrop or directClaim
    /*"claimActions": [
            {
		  "actionType": "plaintext" | "autodrop" | "directClaim",
                "action": 1,
                "desc": "Claim Airdrop", //freetype, less than 15 words
                “actionURL”: “url”,// please include url to external site if needed 
                "cosmosSDKMessageType":"/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim",// please include exact Message Type for directClaim transactions
		  “unlockPercentage”: “50”
            },
            {
                "action": 2,
                "desc": "Stake some airdrop",
		  “unlockPercentage”: “50”
            }
            */
        ]
        
