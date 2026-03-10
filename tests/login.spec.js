const {test}= require('@playwright/test');
const {Login}= require('../vpspages/Vipspmslogin');
const { homePage } = require('../vpspages/homePage');

test('Vipspms Login test', async({page}) =>
{
    const login= new Login(page);
    await login.gotoLoginpage();
    await login.login();

});

test ('vips invalid login', async({ page }) =>{

    const login =new Login(page);
    const home= new homePage();
    await login.gotoLoginpage();
    await login.login('234', 'Rash', 'Adnaj')

})