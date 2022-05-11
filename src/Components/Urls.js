
/* var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy; */

var md5 = require('js-md5');
let code = 'as-!wd+=kjh@$%+asd';

//console.log(md5(today));



export const RestUrls = {
    Code: '?code=' + md5(code),
    Code2: md5(code),
    /* Code2: md5(code) + '1', */
    SiteData: `https://lamishtaken.ofekshely.co.il/api/welcome/SiteDataItems?code=` + md5(code),
    Pages: 'https://lamishtaken.ofekshely.co.il/api/',
    Leads: 'https://lamishtaken.ofekshely.co.il/api/welcome/leadform'
}   

export const ConstantsNames = {
    base_url : 'https://lamishtaken.ofekshely.co.il',
    projectsPageName : '/פרויקטים/',
    /* jobsFormIframe : 'https://avisror.ak-digital.co.il/appi/welcome/sendJobMail?jobId=',
    maskyooIframe : 'https://avisror.ak-digital.co.il/appi/welcome/showMaskyoo?projectId=', */
    pic : 'https://lamishtaken.ofekshely.co.il/api/assets/img/pictures/',
    files : 'https://lamishtaken.ofekshely.co.il/api/assets/files/',
    pic2 : 'https://lamishtaken.ofekshely.co.il/api/assets/img/',
    version : 1
    //version : Math.floor(Math.random() * 100000)
}