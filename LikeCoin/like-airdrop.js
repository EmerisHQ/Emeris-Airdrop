{
    // General project information
    "project": "LikeCoin",
    "projectWebsiteUrl": "https://about.like.co/",
    "projectDescription": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.", //between 30-150 words
    "chainName": "LikeCoin",
    "chainID": "likecoin-mainnet-2",
    "tokenTicker": "LIKE",
    "tokenIcon": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/like.svg",
    "twitterUrl": "https://twitter.com/likecoin",
    "discordUrl": "https://discord.com/invite/W4DQ6peZZZ",
    "mediumUrl": "https://blog.like.co/",
    
    //link to e.g your Medium blog post that outlines the Airdrop details
    "airdropBlogUrl": "https://blog.like.co/proposal-to-fairdrop-likecoin-to-the-cosmos-community-and-civic-likers-d64d841287d8", 
    "airdropStartDate": "H1 2022", // if unsure, please input Q1/H1 2022
    
    //tokenTicker of addresses for eligibility checking 
    "eligibilityTokens": [
        "OSMO",
        "ATOM"
    ] 
    
},

//We display the below information as plaintext on Emeris’s Airdrop Details page
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

//Endpoint to display the user's eligibility status on Emeris. Refer to Eligibility Checking Endpoint section in ReadMe  for required response formatting
"eligibilityCheckEndpoint": "https://airdrop.like.co/api/claims?type=emeris&address=<address>"
