const axios = require('axios');

class DropChainSDK {
    constructor(apiKey, appId) {
        this.apiKey = apiKey;
        this.appId = appId;
        this.headers = {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey
        };
    }

    async assetMintTestnet(createdAssetAmountInt, createdAssetDecimals, createdAssetName, createdAssetUnitName, createdAssetUrl, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_mint_testnet";
        const payload = {
            app_id: this.appId,
            created_asset_amount_int: createdAssetAmountInt,
            created_asset_decimals: createdAssetDecimals,
            created_asset_name: createdAssetName,
            created_asset_unit_name: createdAssetUnitName,
            created_asset_url: createdAssetUrl,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };

        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetMintTestnet:', error);
            throw error;
        }
    }

    async assetMintDropnet(createdAssetAmountInt, createdAssetDecimals, createdAssetName, createdAssetUnitName, createdAssetUrl, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_mint_dropnet";
        const payload = {
            app_id: this.appId,
            created_asset_amount_int: createdAssetAmountInt,
            created_asset_decimals: createdAssetDecimals,
            created_asset_name: createdAssetName,
            created_asset_unit_name: createdAssetUnitName,
            created_asset_url: createdAssetUrl,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };

        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetMintTestnet:', error);
            throw error;
        }
    }

    async getAlgoAddressFromUid(session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_algo_address_from_uid";
        const payload = {
            app_id: this.appId,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getAlgoAddressFromUid:', error);
            throw error;
        }
    }

    async freezeAssetTestnet(asset1Id, receiver1Uid, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/freeze_asset_testnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in freezeAssetTestnet:', error);
            throw error;
        }
    }

    async freezeAssetDropnet(asset1Id, receiver1Uid, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/freeze_asset_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in freezeAssetTestnet:', error);
            throw error;
        }
    }

    async getTransactionInfoDropnet(transaction1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_transaction_info_dropnet";
        const payload = {
            app_id: this.appId,
            transaction1_id: transaction1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getTransactionInfoDropnet:', error);
            throw error;
        }
    }

    async getTransactionInfoTestnet(transaction1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_transaction_info_testnet";
        const payload = {
            app_id: this.appId,
            transaction1_id: transaction1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getTransactionInfoDropnet:', error);
            throw error;
        }
    }

    async getNoteFromTxidTestnet(transaction1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_note_from_txid_testnet";
        const payload = {
            app_id: this.appId,
            transaction1_id: transaction1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getNoteFromTxidTestnet:', error);
            throw error;
        }
    }

    async getNoteFromTxidDropnet(transaction1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_note_from_txid_dropnet";
        const payload = {
            app_id: this.appId,
            transaction1_id: transaction1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getNoteFromTxidDropnet:', error);
            throw error;
        }
    }

    async getAssetInfoTestnet(asset1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_asset_info_testnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getAssetInfoTestnet:', error);
            throw error;
        }
    }

    async getAssetInfoDropnet(asset1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_asset_info_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getAssetInfoDropnet:', error);
            throw error;
        }
    }

    async sendAssetDropnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/send_asset_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            transaction1_note: transaction1Note,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in sendAssetDropnet:', error);
            throw error;
        }
    }
    
    async sendAssetTestnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/send_asset_testnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            transaction1_note: transaction1Note,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in sendAssetTestnet:', error);
            throw error;
        }
    }

    async sendAlgoTestnet(asset1AmountInt, receiver1Uid, transaction1Note, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/send_algo_testnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            receiver1_uid: receiver1Uid,
            transaction1_note: transaction1Note,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in sendAlgoTestnet:', error);
            throw error;
        }
    }
    
    async sendDropDropnet(asset1AmountInt, receiver1Uid, transaction1Note, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/send_drop_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            receiver1_uid: receiver1Uid,
            transaction1_note: transaction1Note,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in sendDropDropnet:', error);
            throw error;
        }
    }

    async atomicSwapAlgoTestnet(asset1AmountInt, asset2AmountInt, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid) {
        const url = "https://api.dropchain.network/v1/atomic_swap_algo_testnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset2_amount_int: asset2AmountInt,
            receiver1_uid: receiver1Uid,
            receiver2_uid: receiver2Uid,
            transaction1_note: transaction1Note,
            transaction2_note: transaction2Note,
            user1_uid: user1Uid,
            user2_uid: user2Uid,
            ...(session1Token && { session1_token: session1Token }),
            ...(session2Token && { session2_token: session2Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in atomicSwapAlgoTestnet:', error);
            throw error;
        }
    }
    
    async atomicSwapDropDropnet(asset1AmountInt, asset2AmountInt, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid) {
        const url = "https://api.dropchain.network/v1/atomic_swap_drop_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset2_amount_int: asset2AmountInt,
            receiver1_uid: receiver1Uid,
            receiver2_uid: receiver2Uid,
            transaction1_note: transaction1Note,
            transaction2_note: transaction2Note,
            user1_uid: user1Uid,
            user2_uid: user2Uid,
            ...(session1Token && { session1_token: session1Token }),
            ...(session2Token && { session2_token: session2Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in atomicSwapDropDropnet:', error);
            throw error;
        }
    }
    
    async getMetadataFromHash(assetMetadataHash, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/get_metadata_from_hash";
        const payload = {
            app_id: this.appId,
            asset_metadata_hash: assetMetadataHash,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in getMetadataFromHash:', error);
            throw error;
        }
    }
    
    async assetIndexerTestnet(session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_indexer_testnet";
        const payload = {
            app_id: this.appId,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetIndexerTestnet:', error);
            throw error;
        }
    }

    async assetIndexerDropnet(session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_indexer_dropnet";
        const payload = {
            app_id: this.appId,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetIndexerDropnet:', error);
            throw error;
        }
    }

    async assetIndexerLookupTestnet(receiver1Uid, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_indexer_lookup_testnet";
        const payload = {
            app_id: this.appId,
            user1_uid: user1Uid,
            receiver1_uid: receiver1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetIndexerLookupTestnet:', error);
            throw error;
        }
    }

    async assetIndexerLookupDropnet(receiver1Uid, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_indexer_lookup_dropnet";
        const payload = {
            app_id: this.appId,
            user1_uid: user1Uid,
            receiver1_uid: receiver1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetIndexerLookupDropnet:', error);
            throw error;
        }
    }
    
    async atomicSwapTestnet(asset1AmountInt, asset1Id, asset2AmountInt, asset2Id, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid) {
        const url = "https://api.dropchain.network/v1/atomic_swap_testnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset1_id: asset1Id,
            asset2_amount_int: asset2AmountInt,
            asset2_id: asset2Id,
            receiver1_uid: receiver1Uid,
            receiver2_uid: receiver2Uid,
            transaction1_note: transaction1Note,
            transaction2_note: transaction2Note,
            user1_uid: user1Uid,
            user2_uid: user2Uid,
            ...(session1Token && { session1_token: session1Token }),
            ...(session2Token && { session2_token: session2Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in atomicSwapTestnet:', error);
            throw error;
        }
    }
    
    async atomicSwapDropnet(asset1AmountInt, asset1Id, asset2AmountInt, asset2Id, receiver1Uid, receiver2Uid, transaction1Note, transaction2Note, session1Token, session2Token, user1Uid, user2Uid) {
        const url = "https://api.dropchain.network/v1/atomic_swap_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset1_id: asset1Id,
            asset2_amount_int: asset2AmountInt,
            asset2_id: asset2Id,
            receiver1_uid: receiver1Uid,
            receiver2_uid: receiver2Uid,
            transaction1_note: transaction1Note,
            transaction2_note: transaction2Note,
            user1_uid: user1Uid,
            user2_uid: user2Uid,
            ...(session1Token && { session1_token: session1Token }),
            ...(session2Token && { session2_token: session2Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in atomicSwapDropnet:', error);
            throw error;
        }
    }

    async assetOptinDropnet(asset1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_optin_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetOptinDropnet:', error);
            throw error;
        }
    }
    
    async assetOptinTestnet(asset1Id, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/asset_optin_testnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in assetOptinTestnet:', error);
            throw error;
        }
    }
    
    async redeemSessionToken(session1Token) {
        const url = "https://api.dropchain.network/v1/redeem_session_token";
        const payload = {
            app_id: this.appId,
            session1_token: session1Token
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in redeemSessionToken:', error);
            throw error;
        }
    }
    
    async createAssetMetadata(assetMetadataDescription, assetMetadataExternalUrl, assetMetadataHasTraits, assetMetadataImageUrl, assetMetadataName, assetMetadataTraitType1, assetMetadataTraitType2, assetMetadataTraitType3, assetMetadataTraitType4, assetMetadataTraitType5, assetMetadataTraitType6, assetMetadataTraitType7, assetMetadataTraitType8, assetMetadataValue1, assetMetadataValue2, assetMetadataValue3, assetMetadataValue4, assetMetadataValue5, assetMetadataValue6, assetMetadataValue7, assetMetadataValue8, user1Uid, session1Token) {
        const url = "https://api.dropchain.network/v1/create_asset_metadata";
        const payload = {
            app_id: this.appId,
            asset_metadata_description: assetMetadataDescription,
            asset_metadata_external_url: assetMetadataExternalUrl,
            asset_metadata_has_traits: assetMetadataHasTraits,
            asset_metadata_image_url: assetMetadataImageUrl,
            asset_metadata_name: assetMetadataName,
            asset_metadata_trait_type1: assetMetadataTraitType1,
            asset_metadata_trait_type2: assetMetadataTraitType2,
            asset_metadata_trait_type3: assetMetadataTraitType3,
            asset_metadata_trait_type4: assetMetadataTraitType4,
            asset_metadata_trait_type5: assetMetadataTraitType5,
            asset_metadata_trait_type6: assetMetadataTraitType6,
            asset_metadata_trait_type7: assetMetadataTraitType7,
            asset_metadata_trait_type8: assetMetadataTraitType8,
            asset_metadata_value1: assetMetadataValue1,
            asset_metadata_value2: assetMetadataValue2,
            asset_metadata_value3: assetMetadataValue3,
            asset_metadata_value4: assetMetadataValue4,
            asset_metadata_value5: assetMetadataValue5,
            asset_metadata_value6: assetMetadataValue6,
            asset_metadata_value7: assetMetadataValue7,
            asset_metadata_value8: assetMetadataValue8,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in createAssetMetadata:', error);
            throw error;
        }
    }

    async unfreezeAssetTestnet(asset1Id, receiver1Uid, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/unfreeze_asset_testnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in unfreezeAssetTestnet:', error);
            throw error;
        }
    }
    
    async unfreezeAssetDropnet(asset1Id, receiver1Uid, session1Token, user1Uid) {
        const url = "https://api.dropchain.network/v1/unfreeze_asset_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            user1_uid: user1Uid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in unfreezeAssetDropnet:', error);
            throw error;
        }
    }
    
    async clawbackAssetTestnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, clawbackUid, user1Uid) {
        const url = "https://api.dropchain.network/v1/clawback_asset_testnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            transaction1_note: transaction1Note,
            user1_uid: user1Uid,
            clawback_uid: clawbackUid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in clawbackAssetTestnet:', error);
            throw error;
        }
    }
    
    async clawbackAssetDropnet(asset1AmountInt, asset1Id, receiver1Uid, transaction1Note, session1Token, clawbackUid, user1Uid) {
        const url = "https://api.dropchain.network/v1/clawback_asset_dropnet";
        const payload = {
            app_id: this.appId,
            asset1_amount_int: asset1AmountInt,
            asset1_id: asset1Id,
            receiver1_uid: receiver1Uid,
            transaction1_note: transaction1Note,
            user1_uid: user1Uid,
            clawback_uid: clawbackUid,
            ...(session1Token && { session1_token: session1Token })
        };
    
        try {
            const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
            return response.data;
        } catch (error) {
            console.error('Error in clawbackAssetDropnet:', error);
            throw error;
        }
    }
    
    // async createListing(productTitle, productDescription, productMediaUrl, productUsdPrice, soldAssetIds, quantityToSendAfterPurchase, session1Token, fulfillmentUid, user1Uid) {
    //     const url = "https://api.dropchain.network/v1/create_listing";
    //     const payload = {
    //         app_id: this.appId,
    //         user1_uid: user1Uid,
    //         product_title: productTitle,
    //         product_description: productDescription,
    //         product_media_url: productMediaUrl,
    //         product_usd_price: productUsdPrice,
    //         sold_asset_ids: soldAssetIds,
    //         fulfillment_uid: fulfillmentUid,
    //         quantity_to_send_after_purchase: quantityToSendAfterPurchase,
    //         ...(session1Token && { session1_token: session1Token })
    //     };
    
    //     try {
    //         const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error in createListing:', error);
    //         throw error;
    //     }
    // }


async updateAssetMetadataDropnet(asset1Id, metadataHash, session1Token, user1Uid) {
    const url = "https://api.dropchain.network/v1/update_asset_metadata_dropnet";
    const payload = {
        app_id: this.appId,
        asset1_id: asset1Id,
        user1_uid: user1Uid,
        metadata_hash: metadataHash,
        ...(session1Token && { session1_token: session1Token })
    };

    try {
        const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
        return response.data;
    } catch (error) {
        console.error('Error in updateAssetMetadataDropnet:', error);
        throw error;
    }
}

async updateAssetMetadataTestnet(asset1Id, metadataHash, session1Token, user1Uid) {
    const url = "https://api.dropchain.network/v1/update_asset_metadata_testnet";
    const payload = {
        app_id: this.appId,
        asset1_id: asset1Id,
        user1_uid: user1Uid,
        metadata_hash: metadataHash,
        ...(session1Token && { session1_token: session1Token })
    };

    try {
        const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
        return response.data;
    } catch (error) {
        console.error('Error in updateAssetMetadataTestnet:', error);
        throw error;
    }
}

async deleteAssetTestnet(asset1Id, session1Token, user1Uid) {
    const url = "https://api.dropchain.network/v1/delete_asset_testnet";
    const payload = {
        app_id: this.appId,
        asset1_id: asset1Id,
        user1_uid: user1Uid,
        ...(session1Token && { session1_token: session1Token })
    };

    try {
        const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
        return response.data;
    } catch (error) {
        console.error('Error in deleteAssetTestnet:', error);
        throw error;
    }
}

async deleteAssetDropnet(asset1Id, session1Token, user1Uid) {
    const url = "https://api.dropchain.network/v1/delete_asset_dropnet";
    const payload = {
        app_id: this.appId,
        asset1_id: asset1Id,
        user1_uid: user1Uid,
        ...(session1Token && { session1_token: session1Token })
    };

    try {
        const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
        return response.data;
    } catch (error) {
        console.error('Error in deleteAssetDropnet:', error);
        throw error;
    }
}

async assetAirdropTestnet(asset1AmountInt, asset1Id, receiver1Uid, session1Token, user1Uid) {
    const url = "https://api.dropchain.network/v1/asset_airdrop_testnet";
    const payload = {
        app_id: this.appId,
        asset1_id: asset1Id,
        user1_uid: user1Uid,
        receiver1_uid: receiver1Uid,
        asset1_amount_int: asset1AmountInt,
        ...(session1Token && { session1_token: session1Token })
    };

    try {
        const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
        return response.data;
    } catch (error) {
        console.error('Error in assetAirdropTestnet:', error);
        throw error;
    }
}

async assetAirdropDropnet(asset1AmountInt, asset1Id, receiver1Uid, session1Token, user1Uid) {
    const url = "https://api.dropchain.network/v1/asset_airdrop_dropnet";
    const payload = {
        app_id: this.appId,
        asset1_id: asset1Id,
        user1_uid: user1Uid,
        receiver1_uid: receiver1Uid,
        asset1_amount_int: asset1AmountInt,
        ...(session1Token && { session1_token: session1Token })
    };

    try {
        const response = await axios.post(url, payload, { headers: this.headers, timeout: 30000 });
        return response.data;
    } catch (error) {
        console.error('Error in assetAirdropDropnet:', error);
        throw error;
    }
}

    

    // ... other methods ...
}

module.exports = DropChainSDK;
