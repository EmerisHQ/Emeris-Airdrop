{
    // General project information
    // Required upon initial submission
    "project": "LUM Network",
    "projectWebsiteUrl": "https://lum.network/",
    "projectDescription": "Lum Network introduces the first decentralized protocol for businesses to build authentic trust with their customers.", //between 30-150 words
    "chainName": "Lum Network",
    "chainID": "lum-network-1",
    "tokenTicker": "LUM",
    "tokenIcon": "https://raw.githubusercontent.com/lum-network/mainnet/master/assets/lum.svg",
    "airdropStartDate": "14 Dec 2021", // if unsure, please input Q1/H1 2022
    // Not required upon initial submission. Please fill out and re-submit pull request whenever you have the additional information ready
    "twitterUrl": "https://twitter.com/lum_network?lang=en",
    "discordUrl": "https://discord.com/invite/KwyVvnBcXF",
    "mediumUrl": "https://medium.com/lum-network",
    "airdropBlogUrl": "https://medium.com/lum-network/lum-airdrop-for-atom-stakers-osmo-lps-120d3e472f38", //link to e.g your Medium blog post that outlines the Airdrop details
    "airdropEndDate": "Jun 2022",
    // Airdrop eligibility information
    "snapshotDate": "29 Sep 2021", // please use UTC
    //tokenTicker of addresses for eligibility checking 	
    "eligibleTokens": [
        "OSMO",
        "ATOM"
    ]
},
//Plaintext to be displayed on Emeris’s Airdrop Details page
"eligibilityCriteria": [
    {
        "Criteria": 1,
        "desc": "ATOM stakers - minimum 5 ATOM staked, maximum cap at 3,000 ATOM, centralized exchanges and their delegators are excluded from the airdrop "
    },
    {
        "Criteria": 2,
        "desc": "OSMO liquidity providers - minimum 30 OSMO provided as liquidity, maximum cap at 20,000 OSMO, only bonded LPs have been taken into account, only the pools with an OSMO pair have been taken into account"
    }
],
//Endpoint to display the user's eligibility status on Emeris. 
//Refer to Eligibility Checking Endpoint section in ReadMe  for required response formatting
"eligibilityCheckEndpoint": "https://us-central1-lum-network.cloudfunctions.net/airdrop/<address>",
//Airdrop’s Claim Process 
//Does your airdrop require unanimous claim action? 
//True = Multiple actions must be completed in order to unlock airdrop. 
//False = each action unlocks a certain percentage of the airdrop
"unanimousClaim": true,
//Actions required to claim the Airdrop
//actionType: autodrop - airdrop will be automatically sent to users, 
//directClaim - users only need to perform one direct claim transaction to claim the entire airdrop, 
//plaintext - for airdrops that require actions other than autodrop or directClaim
"claimActions": [
    {
        "actionType": "plaintext"
    ],
    "action": 1,
    "desc": "Stake LUM to a validator", //freetype, less than 15 words    
    “unlockPercentage”: “50”
},
{
    "action": 2,
    "desc": "Vote on a Lum Network Governance proposal",
		“unlockPercentage”: “50”
}
]
