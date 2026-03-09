class Login
{
constructor(page)
{
this.page = page;
this.sitecode = page.locator("#SiteCode");
this.username = page.locator("#UserName");
this.password = page.locator("#Password");
this.LoginBtn = page.locator("#login-submit");
}

async gotoLoginpage()
{
    await this.page.goto("https://login-staging.vipscloudpms.com/");

}
async login(code = '374269', username = 'Rashmi', password = 'Admin@123')
{
   await this.sitecode.fill(code);
   await this.username.fill(username);
    await this.password.fill(password);
    await this.LoginBtn.click();
}



}
module.exports={Login};