const DropChainSDK = require('dropchain-sdk');
 
const dropchainSdk = new DropChainSDK("<Your DropChain API key>", "<Your DropChain App ID>");

// Example call for assetMintTestnet method
dropchainSdk.assetMintTestnet(createdAssetAmountInt, createdAssetDecimals, createdAssetName, createdAssetUnitName, createdAssetUrl, session1Token, user1Uid)
    .then(response => console.log('assetMintTestnet response:', response))
    .catch(error => console.error('Error in assetMintTestnet:', error));

// Example call for assetMintDropnet method
dropchainSdk.assetMintDropnet(createdAssetAmountInt, createdAssetDecimals, createdAssetName, createdAssetUnitName, createdAssetUrl, session1Token, user1Uid)
    .then(response => console.log('assetMintDropnet response:', response))
    .catch(error => console.error('Error in assetMintDropnet:', error));

// Example call for getAlgoAddressFromUid method
dropchainSdk.getAlgoAddressFromUid(session1Token, user1Uid)
    .then(response => console.log('getAlgoAddressFromUid response:', response))
    .catch(error => console.error('Error in getAlgoAddressFromUid:', error));

// Example call for getTransactionInfoDropnet method
dropchainSdk.getTransactionInfoDropnet(transaction1Id, session1Token, user1Uid)
    .then(response => console.log('getTransactionInfoDropnet response:', response))
    .catch(error => console.error('Error in getTransactionInfoDropnet:', error));

// Example call for getTransactionInfoTestnet method
dropchainSdk.getTransactionInfoTestnet(transaction1Id, session1Token, user1Uid)
    .then(response => console.log('getTransactionInfoTestnet response:', response))
    .catch(error => console.error('Error in getTransactionInfoTestnet:', error));

// Example call for getNoteFromTxidTestnet method
dropchainSdk.getNoteFromTxidTestnet(transaction1Id, session1Token, user1Uid)
    .then(response => console.log('getNoteFromTxidTestnet response:', response))
    .catch(error => console.error('Error in getNoteFromTxidTestnet:', error));

// Example call for getNoteFromTxidDropnet method
dropchainSdk.getNoteFromTxidDropnet(transaction1Id, session1Token, user1Uid)
    .then(response => console.log('getNoteFromTxidDropnet response:', response))
    .catch(error => console.error('Error in getNoteFromTxidDropnet:', error));

// Example call for getAssetInfoTestnet method
dropchainSdk.getAssetInfoTestnet(asset1Id, session1Token, user1Uid)
    .then(response => console.log('getAssetInfoTestnet response:', response))
    .catch(error => console.error('Error in getAssetInfoTestnet:', error));

// Example call for getAssetInfoDropnet method
dropchainSdk.getAssetInfoDropnet(asset1Id, session1Token, user1Uid)
    .then(response => console.log('getAssetInfoDropnet response:', response))
    .catch(error => console.error('Error in getAssetInfoDropnet:', error));

// Example call for sendAssetDropnet method
dropchainSdk.sendAssetDropnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, user1Uid)
    .then(response => console.log('sendAssetDropnet response:', response))
    .catch(error => console.error('Error in sendAssetDropnet:', error));

// Example call for sendAssetTestnet method
dropchainSdk.sendAssetTestnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, user1Uid)
    .then(response => console.log('sendAssetTestnet response:', response))
    .catch(error => console.error('Error in sendAssetTestnet:', error));

// Example call for sendAlgoTestnet method
dropchainSdk.sendAlgoTestnet(asset1AmountInt, receiver1Uid, transaction1Note, session1Token, user1Uid)
    .then(response => console.log('sendAlgoTestnet response:', response))
    .catch(error => console.error('Error in sendAlgoTestnet:', error));

// Example call for sendDropDropnet method
dropchainSdk.sendDropDropnet(asset1AmountInt, receiver1Uid, transaction1Note, session1Token, user1Uid)
    .then(response => console.log('sendDropDropnet response:', response))
    .catch(error => console.error('Error in sendDropDropnet:', error));

// Example call for assetOptinTestnet method
dropchainSdk.assetOptinTestnet(asset1Id, session1Token, user1Uid)
    .then(response => console.log('assetOptinTestnet response:', response))
    .catch(error => console.error('Error in assetOptinTestnet:', error));

// Example call for assetOptinDropnet method
dropchainSdk.assetOptinDropnet(asset1Id, session1Token, user1Uid)
    .then(response => console.log('assetOptinDropnet response:', response))
    .catch(error => console.error('Error in assetOptinDropnet:', error));

// Example call for atomicSwapAlgoTestnet method
dropchainSdk.atomicSwapAlgoTestnet(asset1AmountInt, asset2AmountInt, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid)
    .then(response => console.log('atomicSwapAlgoTestnet response:', response))
    .catch(error => console.error('Error in atomicSwapAlgoTestnet:', error));

// Example call for atomicSwapDropDropnet method
dropchainSdk.atomicSwapDropDropnet(asset1AmountInt, asset2AmountInt, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid)
    .then(response => console.log('atomicSwapDropDropnet response:', response))
    .catch(error => console.error('Error in atomicSwapDropDropnet:', error));

// Example call for getMetadataFromHash method
dropchainSdk.getMetadataFromHash(assetMetadataHash, session1Token, user1Uid)
    .then(response => console.log('getMetadataFromHash response:', response))
    .catch(error => console.error('Error in getMetadataFromHash:', error));

// Example call for createAssetMetadata method
dropchainSdk.createAssetMetadata(assetMetadataDescription, assetMetadataExternalUrl, assetMetadataHasTraits, assetMetadataImageUrl, assetMetadataName, assetMetadataTraitType1, assetMetadataTraitType2, assetMetadataTraitType3, assetMetadataTraitType4, assetMetadataTraitType5, assetMetadataTraitType6, assetMetadataTraitType7, assetMetadataTraitType8, assetMetadataValue1, assetMetadataValue2, assetMetadataValue3, assetMetadataValue4, assetMetadataValue5, assetMetadataValue6, assetMetadataValue7, assetMetadataValue8, user1Uid, session1Token)
    .then(response => console.log('createAssetMetadata response:', response))
    .catch(error => console.error('Error in createAssetMetadata:', error));

// Example call for assetIndexerTestnet method
dropchainSdk.assetIndexerTestnet(session1Token, user1Uid)
    .then(response => console.log('assetIndexerTestnet response:', response))
    .catch(error => console.error('Error in assetIndexerTestnet:', error));

// Example call for assetIndexerDropnet method
dropchainSdk.assetIndexerDropnet(session1Token, user1Uid)
    .then(response => console.log('assetIndexerDropnet response:', response))
    .catch(error => console.error('Error in assetIndexerDropnet:', error));

// Example call for atomicSwapTestnet method
dropchainSdk.atomicSwapTestnet(asset1AmountInt, asset1Id, asset2AmountInt, asset2Id, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid)
    .then(response => console.log('atomicSwapTestnet response:', response))
    .catch(error => console.error('Error in atomicSwapTestnet:', error));

// Example call for atomicSwapDropnet method
dropchainSdk.atomicSwapDropnet(asset1AmountInt, asset1Id, asset2AmountInt, asset2Id, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid)
    .then(response => console.log('atomicSwapDropnet response:', response))
    .catch(error => console.error('Error in atomicSwapDropnet:', error));

// Example call for redeemSessionToken method
dropchainSdk.redeemSessionToken(session1Token)
    .then(response => console.log('redeemSessionToken response:', response))
    .catch(error => console.error('Error in redeemSessionToken:', error));

// Example call for freezeAssetTestnet method
dropchainSdk.freezeAssetTestnet(asset1Id, receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('freezeAssetTestnet response:', response))
    .catch(error => console.error('Error in freezeAssetTestnet:', error));

// Example call for freezeAssetDropnet method
dropchainSdk.freezeAssetDropnet(asset1Id, receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('freezeAssetDropnet response:', response))
    .catch(error => console.error('Error in freezeAssetDropnet:', error));

// Example call for unfreezeAssetTestnet method
dropchainSdk.unfreezeAssetTestnet(asset1Id, receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('unfreezeAssetTestnet response:', response))
    .catch(error => console.error('Error in unfreezeAssetTestnet:', error));

// Example call for unfreezeAssetDropnet method
dropchainSdk.unfreezeAssetDropnet(asset1Id, receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('unfreezeAssetDropnet response:', response))
    .catch(error => console.error('Error in unfreezeAssetDropnet:', error));

// Example call for clawbackAssetTestnet method
dropchainSdk.clawbackAssetTestnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, clawbackUid, user1Uid)
    .then(response => console.log('clawbackAssetTestnet response:', response))
    .catch(error => console.error('Error in clawbackAssetTestnet:', error));

// Example call for clawbackAssetDropnet method
dropchainSdk.clawbackAssetDropnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, clawbackUid, user1Uid)
    .then(response => console.log('clawbackAssetDropnet response:', response))
    .catch(error => console.error('Error in clawbackAssetDropnet:', error));

// Example call for assetIndexerLookupTestnet method
dropchainSdk.assetIndexerLookupTestnet(receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('assetIndexerLookupTestnet response:', response))
    .catch(error => console.error('Error in assetIndexerLookupTestnet:', error));

// Example call for assetIndexerLookupDropnet method
dropchainSdk.assetIndexerLookupDropnet(receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('assetIndexerLookupDropnet response:', response))
    .catch(error => console.error('Error in assetIndexerLookupDropnet:', error));

// Example call for updateAssetMetadataTestnet method
dropchainSdk.updateAssetMetadataTestnet(asset1Id, metadataHash, session1Token, user1Uid)
    .then(response => console.log('updateAssetMetadataTestnet response:', response))
    .catch(error => console.error('Error in updateAssetMetadataTestnet:', error));

// Example call for updateAssetMetadataDropnet method
dropchainSdk.updateAssetMetadataDropnet(asset1Id, metadataHash, session1Token, user1Uid)
    .then(response => console.log('updateAssetMetadataDropnet response:', response))
    .catch(error => console.error('Error in updateAssetMetadataDropnet:', error));

// Example call for deleteAssetTestnet method
dropchainSdk.deleteAssetTestnet(asset1Id, session1Token, user1Uid)
    .then(response => console.log('deleteAssetTestnet response:', response))
    .catch(error => console.error('Error in deleteAssetTestnet:', error));

// Example call for deleteAssetDropnet method
dropchainSdk.deleteAssetDropnet(asset1Id, session1Token, user1Uid)
    .then(response => console.log('deleteAssetDropnet response:', response))
    .catch(error => console.error('Error in deleteAssetDropnet:', error));

// Example call for assetAirdropTestnet method
dropchainSdk.assetAirdropTestnet(asset1AmountInt, asset1Id, receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('assetAirdropTestnet response:', response))
    .catch(error => console.error('Error in assetAirdropTestnet:', error));

// Example call for assetAirdropDropnet method
dropchainSdk.assetAirdropDropnet(asset1AmountInt, asset1Id, receiver1Uid, session1Token, user1Uid)
    .then(response => console.log('assetAirdropDropnet response:', response))
    .catch(error => console.error('Error in assetAirdropDropnet:', error));
