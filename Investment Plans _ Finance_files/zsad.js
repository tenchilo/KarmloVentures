/*$Id$*/
(function() {
    if("undefined" === typeof(__ZSAD)){
        var __ZSAD = {}
        window.__ZSAD = __ZSAD;
        __ZSAD.getID = function() {
            return Math.floor(Math.random()*10000000000000)
        }
        __ZSAD.addZohoBanner = function() {
            var addiv = document.createElement("div");
            addiv.id = "zsada-" + __ZSAD.getID(); //NO I18N
             document.body.style["padding-bottom"]="60px"; //NO I18N
            addiv.innerHTML = "<div style=\"background:#0E2431;height:60px;color: #a4becc;line-height: 60px;text-align: center;box-shadow: 0 1px 0px 0px black inset;position:fixed;width:100%;bottom:0;z-index:1000000;\"> <a href=\"ht"+"tp://www.zohosites.com/?utm_source=footer-banner&amp;utm_medium=ad&amp;utm_campaign=footer-banner\" rel=\"nofollow\" target=\"_blank\" style=\"color: #a4becc;display: flex;justify-content: center;align-items: center;\"><span>This site was created using</span> <img width=\"100px\" height=\"30px\" src=\"ht"+"tps://www.zoho.com/sites/zweb/images/sites/all/sites-logo-white.svg\" style=\"height: 30px;padding-left: 12px;\" alt=\"Zoho Sites\" title=\"Zoho Sites\"></a></div>"; //NO I18N
            document.body.appendChild(addiv);
        }
        if(document.readyState === "complete" || document.readyState === "loaded"){
            __ZSAD.addZohoBanner();
        }else{
            document.addEventListener("DOMContentLoaded", function(event){
                __ZSAD.addZohoBanner();
            });
        }
    }
}());
