import {test} from '@playwright/test';
import { Coins } from '../../../pages/Coins';

test('Create Top upo coins', async({page}) => {
    const coinsInstance = new Coins(page);
    await coinsInstance.createCoin();
    await coinsInstance.verifycreatedtopupCoin();
})