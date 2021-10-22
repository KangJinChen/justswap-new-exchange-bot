import express from 'express';
import chalk from 'chalk';
import TronWeb from 'tronweb';
import dotenv from 'dotenv';
import moment from 'moment';

import logger from './logger.js';
import factoryABI from './factoryABI.js';
import exchangeABI from './exchangeABI.js';

const app = express();
dotenv.config();


const factoryAddress =  process.env.FACTORY_ADDRESS;
const nodeUrl =  process.env.NODE_URL;
const privateKey =  process.env.PRIVATE_KEY;
const apiKey =  process.env.API_KEY;

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(nodeUrl);
const solidityNode = new HttpProvider(nodeUrl);
const eventServer = new HttpProvider(nodeUrl);
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
tronWeb.setHeader({"TRON-PRO-API-KEY": apiKey});


function monitorNewExchange() {
    let factory = tronWeb.contract(factoryABI, factoryAddress);

    swapTrxToToken("TPHvawpabV6BA5d16Ds1vPiFCZtEchw8dU");
    factory["NewExchange"]().watch((err, event) => {
        if (!err){
            logger.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            let time = moment(event.timestamp).format('YYYY-MM-DD HH:mm:ss');
            logger.log("get new exchange created at %s", time);
            logger.log(event);

            //to buy

            logger.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        }
    });
}

async function swapTrxToToken(exchangeAddress) {
    try {
        let exchange = await tronWeb.contract(exchangeABI, exchangeAddress);
        let tokenAmount = await exchange.getTrxToTokenInputPrice(10000000).call();
        logger.log(tokenAmount);
    } catch (err) {
        logger.log(err);
    }
}


monitorNewExchange();

const PORT = process.env.SERVER_PORT;
app.listen(PORT, console.log(chalk.yellow(`Listening for new create exchange...`)));