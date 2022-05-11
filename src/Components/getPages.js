
/* var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy; */

var md5 = require('js-md5');
let code = 'as-!wdfkjh@$%+asd';

//console.log(md5(today));



export const RestUrls = {
    Code: '?code=' + md5(code),
    Code2: md5(code),
    /* Code2: md5(code) + '1', */
    SiteData: `https://avisror.ak-digital.co.il/appi/welcome/SiteDataItems?code=` + md5(code),
    Pages: 'https://avisror.ak-digital.co.il/appi/',
    Leads: 'https://avisror.ak-digital.co.il/appi/welcome/leadform',
    Users: `https://jsonplaceholder.typicode.com/`,
}   

export const ConstantsNames = {
    base_url : 'https://avisror.ak-digital.co.il',
    projectsPageName : '/פרויקטים/',
    centerPageName : '/אביסרור_סנטר/',
    jobsFormIframe : 'https://avisror.ak-digital.co.il/appi/welcome/sendJobMail?jobId=',
    maskyooIframe : 'https://avisror.ak-digital.co.il/appi/welcome/showMaskyoo?projectId=',
    pic : 'https://avisror.ak-digital.co.il/appi/assets/img/pictures/',
    pic2 : 'https://avisror.ak-digital.co.il/appi/assets/img/',
    version : Math.floor(Math.random() * 100000)
}